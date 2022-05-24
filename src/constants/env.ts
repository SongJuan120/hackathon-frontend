export const IS_TESTNET = true;

const variables = {
  mainnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0x96CB066031D1f5c6B0fA77EbDb047D10A13E23a6',
  },
  testnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0x96CB066031D1f5c6B0fA77EbDb047D10A13E23a6',
  }
}

export const envVars = IS_TESTNET ? variables.testnet : variables.mainnet;
