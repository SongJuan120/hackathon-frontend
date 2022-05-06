import { events, NETWORKS } from '../utils/constants';
import { Blockchain } from './Blockchain';

const blockchain = new Blockchain();

blockchain.on(events.connect, () => {
  const network = blockchain.getNetwork();
  if (network) {
    const { tokens, obfcAddress } =
      NETWORKS[network.chainId as keyof typeof NETWORKS];
    blockchain.initTokens(tokens,[obfcAddress]);
  }
});

export { blockchain };
