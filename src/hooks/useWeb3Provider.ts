import { Web3Provider } from '@ethersproject/providers';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { showNotification } from '../utils/helpers';
import {
  Connector,
  INJECTED_CONNECTOR,
  WALLETCONNECT_CONNECTOR,
} from '../constants';
import { UserContext } from '../contexts/UserContext';
import { getWalletAddressAbbr } from '../utils';
import { useIsMounted } from './useIsMounted';

const getConnector = (type: Connector) => {
  switch (type) {
    case 'Injected':
      return INJECTED_CONNECTOR;
    case 'WalletConnect':
      return WALLETCONNECT_CONNECTOR;
  }
};

export const useWeb3Provider = () => {
  const isMounted = useIsMounted();
  const { account, activate, deactivate, ...restParams } =
    useWeb3React<Web3Provider>();
  const [loading, setLoading] = useState(false);
  const { setIsWalletConnectOpened } = useContext(UserContext);

  const connect = useCallback(
    async (connectorType: Connector) => {
      setLoading(true);

      const connector = getConnector(connectorType);
      if (connectorType === 'WalletConnect') {
        const walletConnectProvider =
          await WALLETCONNECT_CONNECTOR.getProvider();

        if (walletConnectProvider) {
          // @ts-ignore
          connector.walletConnectProvider = undefined;
        }
      }
      activate(connector, undefined, true)
        .then(() => {
          showNotification('Wallet Connected. Ready to sign.');
        })
        .catch((error) => {
          console.error('***-connectwallet-err:', error);
          if (error instanceof UnsupportedChainIdError) {
            showNotification('Please switch to Ethereum Network.', 'error');
          }
        })
        .then(() => {
          if (isMounted.current) {
            setLoading(false);
            setIsWalletConnectOpened(false);
          }
        });
    },
    [activate, isMounted, setIsWalletConnectOpened]
  );

  const disconnect = useCallback(() => {
    if (account) {
      deactivate();
      // triggerToast('WALLET_DISCONNECT', getWalletAddressAbbr(account));
    }
  }, [account, deactivate]);

  const isUnsupportedChainId = useMemo(() => {
    return restParams.error instanceof UnsupportedChainIdError;
  }, [restParams.error]);

  useEffect(() => {
    if (account) {
      // updateToast('WALLET_CONNECT', getWalletAddressAbbr(account));
    }
  }, [account]);

  return {
    ...restParams,
    account,
    activate: connect,
    deactivate: disconnect,
    isUnsupportedChainId,
    loading,
  };
};
