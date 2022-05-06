import BigNumber from 'bignumber.js';
import EventEmitter from 'events';
import Web3 from 'web3';
import {
  events,
  PREF,
  STATUS_CONNECTED,
  STATUS_CONNECTING,
  STATUS_ERROR,
  STATUS_SUCCESS,
  STATUS_LOADING,
  STATUS_NOT_CONNECTED,
} from '../utils/constants';
import { INetwork, WalletStatus } from '../utils/index';
import {
  getNetworkByChainId,
  getPreference,
  removePreference,
  setPreference,
  shiftedBigNumber,
  waitFor,
} from '../utils/helpers';
import { Token } from './contracts/token';
import {
  showPendingTransaction,
  showTransactionConfirmed,
  showTransactionFailed,
  showTransactionRejectedByUser,
  showWaitingForSignature,
} from './transactionPopups';
import { uniqueId } from 'lodash';
// import { api } from '../api';

declare global {
  interface Window {
    ethereum: any;
    web3: Web3;
  }
}

export type TransactionInfo = {
  title: string;
  errorMessage?: string;
  successMessage?: string;
};

export class Blockchain extends EventEmitter {
  private status: WalletStatus;
  private network: INetwork | undefined;
  private wallet:
    | {
        address: string;
        balance: BigNumber;
      }
    | undefined;
  private contracts: { [contractAddress: string]: any };
  private tokens: { [tokenAddress: string]: Token };

  web3: Web3;

  constructor() {
    super();
    this.setMaxListeners(0);
    this.web3 = new Web3();
    this.status = STATUS_LOADING;
    this.tokens = {};
    this.contracts = {};
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', () => {
        // api.logout('login');
      });
      window.ethereum.on('chainChanged', this.connectWallet);
    }
    this.init();
  }

  private init() {
    const connectedPreviously = getPreference(PREF.CONNECTED_PREVIOUSLY);
    if (connectedPreviously) this.connectWallet();
    else this.setStatus(STATUS_NOT_CONNECTED);
  }

  initTokens = (tokens: string[], approvalAddresses?: string[]) => {
    tokens.forEach(async (tokenAddress) => {
      this.tokens[tokenAddress] = new Token(tokenAddress);
      console.log('initializing...');
      await this.tokens[tokenAddress].init();
      if (approvalAddresses)
        await this.tokens[tokenAddress].syncAllowances(approvalAddresses);
      console.log('initialized');
      this.emit(events.updated);
      this.tokens[tokenAddress].on(events.updated, (...params) =>
        this.emit(events.updated, ...params)
      );
    });
  };

  getTokens() {
    return this.tokens;
  }

  getToken(tokenAddress: string) {
    return this.tokens[tokenAddress];
  }

  private setStatus = (status: WalletStatus) => {
    this.status = status;
    this.emit(events.updated);
  };

  sendTransaction = ({
    tx,
    transactionInfo,
    from,
    onTransactionHash,
    onSuccess,
    onError,
  }: {
    tx: any;
    transactionInfo: TransactionInfo;
    from: string;
    onTransactionHash?: (txHash: string) => void;
    onSuccess?: () => void;
    onError?: () => void;
  }) => {
    return new Promise((resolve, reject) => {
      const txId = uniqueId();
      const { title, errorMessage, successMessage } = transactionInfo;
      let txHash: string = '';
      showWaitingForSignature(title, txId);
      try {
        tx.send({ from })
          .on('transactionHash', (hash: string) => {
            if (onTransactionHash) onTransactionHash(hash);
            txHash = hash;
            showPendingTransaction(txId, title, txHash);
          })
          .on('receipt', (receipt: any) => {
            if (receipt.blockNumber) {
              if (onSuccess) onSuccess();
              resolve(receipt);
              return showTransactionConfirmed(
                txId,
                title,
                txHash,
                successMessage
              );
            }

            if (onError) onError();
            reject(receipt);
            return showTransactionFailed(txId, title, txHash, errorMessage);
          })
          .on('error', (e: any) => {
            if (onError) onError();
            reject(e);
            return showTransactionFailed(txId, title, txHash, errorMessage);
          });
      } catch (e) {
        if (onError) onError();
        showTransactionRejectedByUser(txId, title, txHash, errorMessage);
        reject(e);
      }
    });
  };

  async waitForTransaction(
    txHash: string,
    blockConfirmations = 5
  ): Promise<typeof STATUS_ERROR | typeof STATUS_SUCCESS> {
    return new Promise(async (resolve, reject) => {
      let numTries = 0;
      let complete = false;

      while (!complete) {
        if (numTries > 0) await waitFor(2000);
        const receipt = await this.web3.eth.getTransactionReceipt(txHash);
        if (receipt) {
          const currentBlock = await this.web3.eth.getBlockNumber();
          const txBlock = receipt.blockNumber;
          if (txBlock && currentBlock - txBlock >= blockConfirmations) {
            const transaction = await this.web3.eth.getTransaction(txHash);
            complete = true;
            if (transaction.blockNumber) {
              resolve(STATUS_SUCCESS);
            } else resolve(STATUS_ERROR);
          }
        } else {
          numTries++;
        }
      }
      resolve(STATUS_ERROR);
    });
  }

  getStatus() {
    return this.status;
  }

  getWallet() {
    return this.wallet;
  }

  getNetwork() {
    return this.network;
  }

  resetTokens() {
    Object.values(this.tokens).forEach((token) => {
      token.removeAllListeners();
    });
    this.tokens = {};
  }

  resetContracts() {
    this.contracts = {};
  }

  connectWallet = async () => {
    if (this.status === STATUS_CONNECTING) return;
    this.setStatus(STATUS_CONNECTING);
    this.resetContracts();
    this.resetTokens();

    this.web3 = new Web3(window.ethereum);
    let accounts;

    try {
      accounts = await this.web3.eth.requestAccounts();
    } catch (e) {
      console.log('user rejected connection');
      this.setStatus(STATUS_NOT_CONNECTED);
      return {
        status: STATUS_ERROR,
        message:
          'User Rejected Connection. Please allow your wallet to connect to Goobig.',
      };
    }

    const walletAddress = accounts[0];
    this.web3.defaultAccount = walletAddress;
    console.log('accounts: ', accounts);
    console.log('web3:', this.web3.eth);

    const chainId = await this.web3.eth.getChainId();
    const network = getNetworkByChainId(chainId);

    console.log('chainId:', chainId);
    console.log('network:', network);

    if (!network) {
      this.setStatus(STATUS_NOT_CONNECTED);
      return {
        status: STATUS_ERROR,
        message:
          'Invalid Network. Please set your wallet to a supported network.',
      };
    }
    
    this.network = network;
    this.wallet = {
      address: walletAddress,
      balance: shiftedBigNumber(await this.web3.eth.getBalance(walletAddress)),
    };

    console.log('wallet:', this.wallet);

    this.setStatus(STATUS_CONNECTED);
    setPreference(PREF.CONNECTED_PREVIOUSLY, true);

    this.emit(events.connect);

    return { status: STATUS_SUCCESS, message: 'Wallet Connected.' };
  };

  signMessage = async (message: string) => {
    if (!this.web3?.defaultAccount)
      return {
        status: STATUS_ERROR,
        result: 'No wallet connected',
      };
    console.log('signing message using', this.web3.defaultAccount);
    let status = STATUS_SUCCESS;
    let result = '';
    try {
      result = await this.web3.eth.personal.sign(
        message,
        this.web3.defaultAccount,
        ''
      );
      console.log('result:', result);
    } catch (e: any) {
      status = STATUS_ERROR;
      result = e.message;
    }

    return { status, result };
  };

  initContracts(addresses: string[], abi: any[] | any) {
    function getAbi(idx: number) {
      if (Array.isArray(abi)) return abi[idx];
      return abi;
    }
    return addresses.map((address, idx) =>
      this.initContract(address, getAbi(idx))
    );
  }

  initContract(address: string, abi: any) {
    this.contracts[address] = new this.web3.eth.Contract(abi, address);
    return this.contracts[address];
  }

  getContract(contractAddress: string) {
    return this.contracts[contractAddress];
  }

  disconnectWallet() {
    removePreference(PREF.CONNECTED_PREVIOUSLY);
    setTimeout(() => window.location.reload(), 10);
  }
}
