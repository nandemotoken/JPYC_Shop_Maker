let web3tr;
let torus;
 
async function newTorus() {

torus = new Torus({
  buttonPosition: "top-right" // default: bottom-left
});
await torus.init({
  buildEnv: "production", // default: production
  enableLogging: true, // default: false
  network: {
    host: "matic", // default: mainnet
    chainId: 137, // default: 1
    networkName: "Matic Network" // default: Main Ethereum Network
  },
loginConfig: {
    'google': {
      showOnModal: false,
    },
    'facebook': {
      showOnModal: false,
    },
    'discord': {
      showOnModal: false,
    },
},
  showTorusButton: true // default: true
});
await torus.login(); // await torus.ethereum.enable()
provider = new ethers.providers.Web3Provider(torus.provider);
}
