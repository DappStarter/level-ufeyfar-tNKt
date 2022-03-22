require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey close off success struggle rebel nominee coast gesture muscle army genius'; 
let testAccounts = [
"0x9b58eeddf4ccfd1daa3c711798fb55040395a2242c5ff28da209bcac38beeae8",
"0x79c6cee62d25464f04ff4b73caaed0cc7a4e4282ef11a513e61989b956bf05e2",
"0xc1282ce073c485beef697f7478fa4aa7ec3c1967b9458aa6841d0bcfcad732ff",
"0x7b0b32c6373821752769bdc335c2de9c89ed28ba9832b5c6dab710cde698bdd4",
"0xd415f7ff25c1654190773339ae65944f71b0d615e89ce8db838e94232499dc11",
"0x41658aa16e88ea42dc2f83a3502b350e8e09b24c1733a219e5d212682bf3ae64",
"0x1fba56d181c87d0fb0e44192f7adc079904889b258caa3b820fbd81572521358",
"0x29a2da882b002aecc6e96476d7e8180d326cdce9713f2223a79c7a2598876733",
"0x8ee32f7ffe22b8fc8fbe185e51aff8e3a564eae2f28b0b96b6249900e7a8c24a",
"0x322126f593f7374ddf55ce91ec124a7bf5b3b8b7a9297bbbfd00b9f65baff1dc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


