export const IS_TESTNET = true;

const variables = {
  mainnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0xa676a334A4B26694dCC203Fe7e67E51e87aa3255',
  },
  testnet: {
    RAFFLEMARKETPLACE_ADDRESS: '0xa676a334A4B26694dCC203Fe7e67E51e87aa3255',
  }
}

export const envVars = IS_TESTNET ? variables.testnet : variables.mainnet;
