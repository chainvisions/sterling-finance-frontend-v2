import BigNumber from 'bignumber.js'
import * as contractsTestnet from './contractsTestnet'
import * as contracts from './contracts'
import * as actions from './actions'
import * as queries from './graph-queries'

let isTestnet = process.env.NEXT_PUBLIC_CHAINID == 80001

// URLS
let scan = 'https://arbiscan.io/'
let cont = contracts

if(isTestnet) {
  scan = 'https://mumbai.arbiscan.io/'
  cont = contractsTestnet
}

export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions
export const QUERIES = queries

export const NETWORK_TOKEN_NAME = CONTRACTS.FTM_NAME;

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const RENAME_ASSETS = {
  "miMATIC": "MAI"
}

export const BLACK_LIST_TOKENS = [
  '0x104592a158490a9228070e0a8e5343b499e125d0'.toLowerCase(), // wrong FRAX
  '0x8d546026012bf75073d8a586f24a5d5ff75b9716'.toLowerCase(), // old SPHERE
  '0x17e9c5b37283ac5fbe527011cec257b832f03eb3'.toLowerCase(), // old SPHERE
]

export const BASE_ASSETS_WHITELIST = [
  {
    id: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: "42161",
    symbol: "WETH",
  },
  {
    id: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    address: "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    chainId: "42161",
    symbol: "WBTC",
  },
  {
    id: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    chainId: "42161",
    symbol: "USDC",
  },
  {
    id: "0xfA157458912D54492df38448c613375C772F2b08",
    address: "0xfA157458912D54492df38448c613375C772F2b08",
    chainId: "42161",
    symbol: "STERLING",
  },
  {
    id: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
    address: "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
    chainId: "42161",
    symbol: "FXS",
  },
  {
    id: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    address: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    chainId: "42161",
    symbol: "FRAX",
  },
  {
    id: "0x4cd44ced63d9a6fef595f6ad3f7ced13fceac768",
    address: "0x4cd44ced63d9a6fef595f6ad3f7ced13fceac768",
    chainId: "42161",
    symbol: "tetuQi",
  },
  {
    id: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    address: "0x580a84c73811e1839f75d86d75d88cca0c241ff4",
    chainId: "42161",
    symbol: "QI",
  },
  {
    id: "0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6",
    address: "0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6",
    chainId: "42161",
    symbol: "penSTERLING",
  },
  {
    id: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    chainId: "42161",
    symbol: "WETH",
  },
  {
    id: "0x8a0e8b4b0903929f47c3ea30973940d4a9702067",
    address: "0x8a0e8b4b0903929f47c3ea30973940d4a9702067",
    chainId: "42161",
    symbol: "INSUR",
  },
  {
    id: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    chainId: "42161",
    symbol: "DAI",
  },
  {
    id: "0x9008d70a5282a936552593f410abcbce2f891a97",
    address: "0x9008d70a5282a936552593f410abcbce2f891a97",
    chainId: "42161",
    symbol: "PEN",
  },
  {
    id: "0xa3c322ad15218fbfaed26ba7f616249f7705d945",
    address: "0xa3c322ad15218fbfaed26ba7f616249f7705d945",
    chainId: "42161",
    symbol: "MV",
  },
  {
    id: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    chainId: "42161",
    symbol: "MAI",
  },
  {
    id: "0xb424dfdf817faf38ff7acf6f2efd2f2a843d1aca",
    address: "0xb424dfdf817faf38ff7acf6f2efd2f2a843d1aca",
    chainId: "42161",
    symbol: "vQi",
  },
  {
    id: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    chainId: "42161",
    symbol: "USDT",
  },
  {
    id: "0xc250e9987a032acac293d838726c511e6e1c029d",
    address: "0xc250e9987a032acac293d838726c511e6e1c029d",
    chainId: "42161",
    symbol: "CLAM",
  },
  {
    id: "0xe2fb42f495725c4ee50ce6e29dead57c14e0f2fd",
    address: "0xe2fb42f495725c4ee50ce6e29dead57c14e0f2fd",
    chainId: "42161",
    symbol: "bePEN",
  },
  {
    id: "0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d",
    address: "0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d",
    chainId: "42161",
    symbol: "WBNB",
  },
  {
    id: "0xf8f9efc0db77d8881500bb06ff5d6abc3070e695",
    address: "0xf8f9efc0db77d8881500bb06ff5d6abc3070e695",
    chainId: "42161",
    symbol: "SYN",
  },
];

export const ROUTE_ASSETS = [
  {
    address: CONTRACTS.WFTM_ADDRESS,
    decimals: CONTRACTS.WFTM_DECIMALS,
    logoURI: CONTRACTS.WFTM_LOGO,
    name: CONTRACTS.WFTM_NAME,
    symbol: CONTRACTS.WFTM_SYMBOL,
  }, {
    address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg",
    name: "USDC",
    symbol: "USDC",
  },
  {
    address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg",
    name: "(PoS) Tether USD",
    symbol: "USDT",
  }, {
    address: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f",
    decimals: 6,
    logoURI:
      "https://2173993027-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F9HhCCgYexXiRot0OWAJY%2Fuploads%2FQ41zhb0z0oV5WI1zpKEg%2FUSD%2B%20logo.png?alt=media&token=533d9ed9-6904-4f45-82a3-2c9e1060a3b5",
    name: "USD+",
    symbol: "USD+",
  }, {
    address: "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89/logo.png",
    name: "FRAX",
    symbol: "FRAX",
  }, {
    address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg",
    name: "(PoS) Dai Stablecoin",
    symbol: "DAI",
  },
  {
    address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    decimals: 18,
    logoURI:
      "https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg",
    name: "Wrapped Ether",
    symbol: "WETH",
  }
];

// hardcoded routes for taxable tokens
export const DIRECT_SWAP_ROUTES = {
  // SPHERE -> USD+
  ["0x62f594339830b90ae4c084ae7d223ffafd9658a7".toLowerCase()]: "0x236eec6359fb44cce8f97e99387aa7f8cd5cde1f".toLowerCase(),
  // penSTERLING -> STERLING
  ["0x5b0522391d0a5a37fd117fe4c43e8876fb4e91e6".toLowerCase()]: "0xfA157458912D54492df38448c613375C772F2b08".toLowerCase(),
}

export const MULTISWAP_INCLUDE = [
  // TETU
  // "0x255707B70BF90aa112006E1b07B9AeA6De021424".toLowerCase(),
]

export const ALLOWED_DUPLICATE_SYMBOLS = [
    "FXS",
]

export const DEFAULT_ASSET_FROM = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1" // DONE
export const DEFAULT_ASSET_TO = "0xfA157458912D54492df38448c613375C772F2b08" // DONE

export const GAS_MULTIPLIER = 1.3
