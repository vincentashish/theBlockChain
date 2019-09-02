const Blockchain = require('./Blockchain');
const Block = require('./Block');


let bc = new Blockchain();
bc.addBlock(new Block(Date.now() , "second node"));
bc.addBlock(new Block(Date.now() , "third node"));

console.log(JSON.stringify(bc,null,4));
console.log(`is bc valid? ${bc.checkValid()}`);