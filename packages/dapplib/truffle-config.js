require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture roast frame ski strategy crawl random coast hundred light army general'; 
let testAccounts = [
"0x566b64ec26ba1a3fa509bfd252360f7c692362a7cb6bb52fe4d2103bb9b5bcba",
"0x191998afdf414ac65c4ddbe2646be6bd30653347aa8a9c46e7ce151e6467dcf0",
"0x594140f89d6df2ed998563883a42f05e57b9388e8f79a3d9cd5dd6c09fdba8a7",
"0x7904037caf4ab99408547f3bc3c226e650a6d0e4739c23e1317b7cba3a5c0f5e",
"0x4ad58615aee678fc296572414fa662d456a831a481e7f87ca9a6431723cdcc75",
"0xc7337e51dd5f7b7d3490938bb46c95dc617c3c3d9bba06def7c8b06515d96f94",
"0xb9d1b44ea7f0428ed234af0161da5a4c29083518e6b30e55b69cf3b7cb642d99",
"0x9d004ab220b9f891140cfaf12716da05804e80efa692c39c3e213d9c4daf345f",
"0x8777390181bb74d3e31e41f9300dd8cc3004f21533a1c47bbdbbe601fb8b2808",
"0x232f67e3b04d0dd0967e0532712380525ee1202707bc7a9b4e23df9a16b43792"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

