// https://eth-goerli.g.alchemy.com/v2/SAuFTebItRQZ1eUd8lpnl_iM_tp7Nb9J

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/SAuFTebItRQZ1eUd8lpnl_iM_tp7Nb9J',
      accounts: [
        'b83f1b99a3203d680f03cce225398dabed1342a18656b78c752b7e341ebd7148',
      ],
    },
  },
};