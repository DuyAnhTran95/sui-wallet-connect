import { WalletStandardAdapterProvider } from "@mysten/wallet-adapter-all-wallets";

let options = document.getElementById("walletOptions");
let wallets;
let connectedWallet;

async function connect() {
  document.getElementById("connectButton").remove();

  wallets = new WalletStandardAdapterProvider().get();
  console.log(wallets);

  wallets.forEach((wallet) => {
    const opt = document.createElement("button");
    opt.value = wallet.name;
    opt.innerHTML = wallet.name;
    opt.addEventListener("click", connectWallet);
    options.appendChild(opt);
  });
}

async function connectWallet(button) {
  const value = this.value;
  console.log(wallets);
  options.innerHTML="";
  connectedWallet = wallets.find(w => w.name === value);
  console.log(connectedWallet);

  if (!connectedWallet.connected)
    await connectedWallet.connect();
}

window.connect = connect;
