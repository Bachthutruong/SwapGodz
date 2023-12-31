const zkEvmTokens = [
  {
    chainId: 1101,
    address: '0xb23c20efce6e24acca0cef9b7b7aa196b84ec942',
    symbol: 'rETH',
    name: 'Rocket Pool ETH',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/98ac93d4-1b0e-44a9-977e-2dcb9aa78212.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/428c44cb-9078-4820-b864-faf20a62c56e.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 1101,
    address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/b36e57ad-e80b-4ca9-8bf9-4719c6903d7d.png',
    isWhitelisted: true,
    isStable: true,
  },
  {
    chainId: 1101,
    address: '0xff8544fed5379d9ffa8d47a74ce6b91e632ac44d',
    symbol: 'FRAX',
    name: 'Frax',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/1d37c3e5-22f8-421b-b0b0-6f2be8c0427d.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x83b874c1e09d316059d929da402dcb1a98e92082',
    symbol: 'stMATIC',
    name: 'Staked MATIC',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/583e3838-b198-4e94-8515-9d3a8302ad48.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/3005a16a-4666-45ec-bd26-7cfae555e587.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    decimals: 8,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/00264d44-415a-4227-b6e1-ae273e9691bb.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0xf329bc8e21da7f278ce806e04c2266974edb1386',
    symbol: 'KOKOS',
    name: 'Kokonut Swap Token',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/2f4a09d6-3aeb-4881-9653-a59c8b6dd6bf.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x696c0ba235444607a1c4b93e6b34ba14928c1b60',
    symbol: 'DOV',
    name: 'DoveSwap',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/57b66d15-fe07-4622-bd5b-936ace8fbe61.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x3d5320821bfca19fb0b5428f2c79d63bd5246f89',
    symbol: 'CRV',
    name: 'Curve DAO Token',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/5fc225a6-bfda-403f-a401-2e53fd481ed7.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x120ef59b80774f02211563834d8e3b72cb1649d6',
    symbol: 'BAL',
    name: 'Balancer',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/f84d886f-f5d6-47b2-be70-7c004bf7d40f.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0xcf7ecee185f19e2e970a301ee37f93536ed66179',
    symbol: 'frxETH',
    name: 'Frax Ether',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/eafa4af9-1f2a-4314-b475-6ddbd676e6b1.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x5d8cff95d7a57c0bf50b30b43c7cc0d52825d4a9',
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/8a389d44-fb08-4c50-9271-a5a6f8d2294c.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x0d1e753a25ebda689453309112904807625befbe',
    symbol: 'Cake',
    name: 'PancakeSwap Token',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/6ce32914-90a2-4941-bd0f-1e05e071c23b.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0xa2036f0538221a77a3937f1379699f44945018d0',
    symbol: 'MATIC',
    name: 'Matic ',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/6e5645d9-4388-4916-b87d-8e5d3952df5f.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x68286607a1d43602d880d349187c3c48c0fd05e6',
    symbol: 'QUICK',
    name: 'QuickSwap',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/29cf1faf-a0b2-4d80-999d-c8eb00d1a7c1.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/562e7395-32fc-48c6-84b0-3c0d616245e1.png',
    isWhitelisted: true,
    isStable: false,
  },
  {
    chainId: 1101,
    address: '0x6a80a465409ce8d36c513129c0feea61bed579ba',
    symbol: 'KNC',
    name: 'Kyber Network Crystal v2',
    decimals: 18,
    marketCap: 0,
    logoURI: 'https://storage.googleapis.com/ks-setting-1d682dca/994c3e7e-e8ef-44f4-ac87-2c51caf4c8ca.png',
    isWhitelisted: true,
    isStable: false,
  },
]

export default zkEvmTokens
