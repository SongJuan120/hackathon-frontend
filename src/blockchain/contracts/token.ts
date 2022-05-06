import BigNumber from 'bignumber.js';
import { EventEmitter } from 'events';
import { blockchain } from '..';
import ERC20ABI from '../abis/erc20.json';
import { events, MAX_NUM } from '../../utils/constants';
import {
  formatNumber,
  shiftedBigNumber,
  smallToBig,
} from '../../utils/helpers';

export class Token extends EventEmitter {
  address: string;
  name: string;
  symbol: string;
  icon: string;
  decimals: number;
  totalSupply: BigNumber;
  contract: any;
  userAddress: string | undefined;
  userBalance: BigNumber;
  formatDecimals: number;
  allowance: { [address: string]: BigNumber };
  approvalPending: { [address: string]: boolean };

  constructor(address: string) {
    super();

    this.address = address;
    this.name = '';
    this.symbol = '';
    this.icon = '';
    this.contract = blockchain.initContract(address, ERC20ABI);
    this.userAddress = blockchain.getWallet()?.address;
    this.userBalance = new BigNumber(0);
    this.totalSupply = new BigNumber(0);
    this.decimals = 18;
    this.formatDecimals = 2;
    this.allowance = {};
    this.approvalPending = {};
  }

  async init() {
    this.decimals = parseInt(await this.contract.methods.decimals().call());
    this.name = await this.contract.methods.name().call();
    this.symbol = await this.contract.methods.symbol().call();
    this.icon = this.symbol;
    this.userBalance = shiftedBigNumber(
      await this.contract.methods.balanceOf(this.userAddress).call(),
      this.decimals
    );
    this.totalSupply = shiftedBigNumber(
      await this.contract.methods.totalSupply().call(),
      this.decimals
    );
    await this.syncAllowances(Object.keys(this.allowance));
    this.emit(events.updated);
  }

  async syncAllowances(addresses: string[]) {
    let allowance: { [key: string]: BigNumber } = {};
    let approvalPending: { [key: string]: boolean } = {};
    for (let address of addresses) {
      allowance[address] = await this.fetchAllowance(address);
      approvalPending[address] = this.approvalPending[address] || false;
    }
    this.allowance = allowance;
    this.approvalPending = approvalPending;
    this.emit(events.updated);
  }

  async fetchAllowance(address: string) {
    return shiftedBigNumber(
      await this.contract.methods.allowance(this.userAddress, address).call(),
      this.decimals
    );
  }

  setApprovalPending(address: string, isPending = true) {
    this.approvalPending[address] = isPending;
    this.emit(events.updated);
  }

  async updateBalance() {
    this.userBalance = shiftedBigNumber(
      await this.contract.methods.balanceOf(this.userAddress).call(),
      this.decimals
    );
    this.totalSupply = shiftedBigNumber(
      await this.contract.methods.totalSupply().call(),
      this.decimals
    );
  }

  formattedBalance() {
    return formatNumber(this.userBalance, this.formatDecimals);
  }

  async sync() {
    await this.updateBalance();
    this.emit(events.updated);
  }

  approve(address: string, amount?: BigNumber) {
    const formattedAmount = amount
      ? smallToBig(amount, this.decimals)
      : MAX_NUM;
    return this.contract.methods.approve(address, formattedAmount);
  }

  transfer(address: string, amount: BigNumber) {
    const formattedAmount = smallToBig(amount, this.decimals);
    return this.contract.methods.transfer(address, formattedAmount);
  }
}
