// use this to add things to the sidebar following the syntax below
module.exports = {
  docs: [
    "welcome-to-b3",
    {
      "type": "category",
      "label": "B3 Documentation",
      "collapsed": false,
      "items": [
        {
          type: 'category',
          label: 'About B3',
          collapsed: false,
          items: [
            "v1.0/learn-about-b3",
            "v1.0/build-on-b3",
            "v1.0/brand-kit",
            "v1.0/network-status",
            "v1.0/contact",
          ]
        },
        {
          type: 'category',
          label: 'Sepolia (Testnet)',
          collapsed: false,
          items: [
            "v1.0/connect-to-testnet",
            "v1.0/bridge-to-b3-testnet",
            "v1.0/testnet-bridge",
            "v1.0/testnet-faucet",
            "v1.0/testnet-explorer",
          ]
        },
        {
          type: 'category',
          label: 'Tools',
          collapsed: false,
          items: [
            "v1.0/node-providers",
            "v1.0/block-explorers",
            "v1.0/faucets",
          ]
        },
      ]
    },
  ],
};