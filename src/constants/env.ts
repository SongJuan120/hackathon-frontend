export const IS_TESTNET = window.location.hostname === 'localhost' || window.location.hostname === 'dev.toolboxtoken.com';

const variables = {
  mainnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0xf91060888856F5f10878C037636f575d238a160F',
  },
  testnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0xf91060888856F5f10878C037636f575d238a160F',
  }
}

export const envVars = IS_TESTNET ? variables.testnet : variables.mainnet;
