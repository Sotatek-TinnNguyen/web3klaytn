const { Wallet, TxType } = require("@klaytn/ethers-ext");
const ethers = require("ethers");

//
// TxTypeSmartContractDeploy
// https://docs.klaytn.foundation/content/klaytn/design/transactions/basic#txtypesmartcontractdeploy
//
//   to:    Must be "0x0000000000000000000000000000000000000000",
//   value: Must be 0, if not payable
//   input: SmartContract binary,
//   humanReadable: Must be false,
//   codeFormat: Must be 0x00
//

const senderAddr = "0xa2a8854b1802d8cd5de631e690817c253d6a9153";
const senderPriv = "0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider("https://public-en-baobab.klaytn.net");
  const wallet = new Wallet(senderPriv, provider);

  let tx = {
    type: TxType.SmartContractDeploy,
    to:    "0x0000000000000000000000000000000000000000",
    value: 0,
    from: senderAddr,
    input: "0x608060405234801561001057600080fd5b5060f78061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633fb5c1cb1460415780638381f58a146053578063d09de08a14606d575b600080fd5b6051604c3660046083565b600055565b005b605b60005481565b60405190815260200160405180910390f35b6051600080549080607c83609b565b9190505550565b600060208284031215609457600080fd5b5035919050565b60006001820160ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220e0f4e7861cb6d7acf0f61d34896310975b57b5bc109681dbbfb2e548ef7546b364736f6c63430008120033",
    humanReadable: false,
    codeFormat: 0x00,
  };

  const sentTx = await wallet.sendTransaction(tx);
  console.log("sentTx", sentTx);

  const rc = await sentTx.wait();
  console.log("receipt", rc);
}

main();
