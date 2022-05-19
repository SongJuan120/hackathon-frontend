export const IS_TESTNET = true;

const variables = {
  mainnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0x2e1C56241c8E59c5a1B7b369d9dD15785436f07E',
  },
  testnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0x2e1C56241c8E59c5a1B7b369d9dD15785436f07E',
  }
}

export const envVars = IS_TESTNET ? variables.testnet : variables.mainnet;
