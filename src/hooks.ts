import { useEffect, useState } from 'react';
import { events } from './utils/constants';
import { blockchain } from './blockchain';
import { uniqueId } from 'lodash';

export const useLogin = () => {};

export const useWallet = () => {
  const [network, setNetwork] = useState(blockchain.getNetwork());
  const [status, setStatus] = useState(blockchain.getStatus());
  const [wallet, setWallet] = useState(blockchain.getWallet());

  useEffect(() => {
    function handleUpdate() {
      const newNetwork = blockchain.getNetwork();
      const status = blockchain.getStatus();
      const wallet = blockchain.getWallet();
      setStatus(status);
      setWallet(wallet);
      setNetwork(newNetwork);
    }
    blockchain.on(events.updated, handleUpdate);
    return () => {
      blockchain.removeListener(events.updated, handleUpdate);
    };
  }, []);

  const { connectWallet, disconnectWallet, signMessage } = blockchain;

  return {
    wallet,
    status,
    network,
    connectWallet,
    disconnectWallet,
    signMessage,
  };
};

export function useMessageForSignature() {
  const { wallet, connectWallet, signMessage, disconnectWallet } = useWallet();

  const message = {
    timestamp: new Date(),
    wallet: wallet?.address,
    data: uniqueId(),
  };

  return {
    message,
    wallet,
    connectWallet,
    disconnectWallet,
    signMessage,
  };
}
