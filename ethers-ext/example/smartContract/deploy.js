const ethers = require("ethers");
const { Wallet } = require("../../dist/src/ethers"); // require("@klaytn/sdk-ethers");

// We refer the example from ethers
// https://docs.ethers.org/v5/api/contract/example/

async function main() {

    const senderAddr = '0xa2a8854b1802d8cd5de631e690817c253d6a9153' 
    const senderPriv = '0x0e4ca6d38096ad99324de0dde108587e5d7c600165ae4cd6c2462c597458c2b8' 
    
    const provider = new ethers.providers.JsonRpcProvider('https://public-en-baobab.klaytn.net');
    const wallet = new Wallet(senderPriv, provider);

    const bytecode = "0x608060405234801561001057600080fd5b506040516103bc3803806103bc83398101604081905261002f9161007c565b60405181815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a333600090815260208190526040902055610094565b60006020828403121561008d578081fd5b5051919050565b610319806100a36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063313ce5671461005157806370a082311461006557806395d89b411461009c578063a9059cbb146100c5575b600080fd5b604051601281526020015b60405180910390f35b61008e610073366004610201565b6001600160a01b031660009081526020819052604090205490565b60405190815260200161005c565b604080518082018252600781526626bcaa37b5b2b760c91b6020820152905161005c919061024b565b6100d86100d3366004610222565b6100e8565b604051901515815260200161005c565b3360009081526020819052604081205482111561014b5760405162461bcd60e51b815260206004820152601a60248201527f696e73756666696369656e7420746f6b656e2062616c616e6365000000000000604482015260640160405180910390fd5b336000908152602081905260408120805484929061016a9084906102b6565b90915550506001600160a01b0383166000908152602081905260408120805484929061019790849061029e565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350600192915050565b80356001600160a01b03811681146101fc57600080fd5b919050565b600060208284031215610212578081fd5b61021b826101e5565b9392505050565b60008060408385031215610234578081fd5b61023d836101e5565b946020939093013593505050565b6000602080835283518082850152825b818110156102775785810183015185820160400152820161025b565b818111156102885783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156102b1576102b16102cd565b500190565b6000828210156102c8576102c86102cd565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d80384ce584e101c5b92e4ee9b7871262285070dbcd2d71f99601f0f4fcecd2364736f6c63430008040033";

    // A Human-Readable ABI; we only need to specify relevant fragments,
    // in the case of deployment this means the constructor
    const abi = [
        "constructor(uint totalSupply)"
    ];

    const factory = new ethers.ContractFactory(abi, bytecode, wallet);

    // Deploy, setting total supply to 100 tokens (assigned to the deployer)
    const contract = await factory.deploy("100");

    // The contract is not currentl live on the network yet, however
    // its address is ready for us
    console.log( contract.address );
    // '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674'

    // Wait until the contract has been deployed before interacting
    // with it; returns the receipt for the deployemnt transaction
    console.log( await contract.deployTransaction.wait() );
    // {
    //   blockHash: '0xe0628e513348591aaf653ff88ac043d9da2a5755cf12060be5532b2ffea4eab3',
    //   blockNumber: 60329,
    //   byzantium: true,
    //   confirmations: 1,
    //   contractAddress: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //   cumulativeGasUsed: { BigNumber: "250842" },
    //   effectiveGasPrice: { BigNumber: "1500000007" },
    //   events: [
    //     {
    //       address: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //       blockHash: '0xe0628e513348591aaf653ff88ac043d9da2a5755cf12060be5532b2ffea4eab3',
    //       blockNumber: 60329,
    //       data: '0x0000000000000000000000000000000000000000000000056bc75e2d63100000',
    //       getBlock: [Function (anonymous)],
    //       getTransaction: [Function (anonymous)],
    //       getTransactionReceipt: [Function (anonymous)],
    //       logIndex: 0,
    //       removeListener: [Function (anonymous)],
    //       topics: [
    //         '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    //         '0x0000000000000000000000000000000000000000000000000000000000000000',
    //         '0x00000000000000000000000046e0726ef145d92dea66d38797cf51901701926e'
    //       ],
    //       transactionHash: '0xa3b258b2a091ef197ccc7ec269e3b4b3eaa421041c5a6db31ee751ebc403bccb',
    //       transactionIndex: 0
    //     }
    //   ],
    //   from: '0x46E0726Ef145d92DEA66D38797CF51901701926e',
    //   gasUsed: { BigNumber: "250842" },
    //   logs: [
    //     {
    //       address: '0x70ff5c5B1Ad0533eAA5489e0D5Ea01485d530674',
    //       blockHash: '0xe0628e513348591aaf653ff88ac043d9da2a5755cf12060be5532b2ffea4eab3',
    //       blockNumber: 60329,
    //       data: '0x0000000000000000000000000000000000000000000000056bc75e2d63100000',
    //       logIndex: 0,
    //       topics: [
    //         '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
    //         '0x0000000000000000000000000000000000000000000000000000000000000000',
    //         '0x00000000000000000000000046e0726ef145d92dea66d38797cf51901701926e'
    //       ],
    //       transactionHash: '0xa3b258b2a091ef197ccc7ec269e3b4b3eaa421041c5a6db31ee751ebc403bccb',
    //       transactionIndex: 0
    //     }
    //   ],
    //   logsBloom: '0x00000000000000000000000000000004000000000000000000000000000040000000000000000000000000000000000000000000000000000000020000000000000000000000000000000008000000000000001000000000000000000000000000000000020000000000000000000800000000000000000000000010000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000',
    //   status: 1,
    //   to: null,
    //   transactionHash: '0xa3b258b2a091ef197ccc7ec269e3b4b3eaa421041c5a6db31ee751ebc403bccb',
    //   transactionIndex: 0,
    //   type: 2
    // }
}

main();