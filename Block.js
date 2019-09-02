const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index,timestamp,data,previousHash) {
    this.index = 0;
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
    this.previousHash = "0";
    this.nonce = 0;
  }
  

  calculateHash() {
    return SHA256(this.index + this.previousHash + this.timestamp +  this.data + this.nonce).toString();
  }

  mineBlock(difficulty) {

  }

}

module.exports = Block;