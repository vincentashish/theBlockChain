
class Blockchain {
  constructor() {
    this.chain = [this.createGenesis()]
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.latestBlock().hash;
    newBlock = newBlock.calculateHash();
    this.chain = [...this.chain,newBlock];
  }

  createGenesis() {
    return new Block(0,Date.now , "first block","0");
  }

  checkValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];
      
      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }
      if(currentBlock.previousHash !== prevBlock.hash) {
        return false;
      }  
    }
    return true;
  }

  latestBlock() {
    const chain = this.chain;
    return chain[chain.length - 1]
  }
}

module.exports = Blockchain;