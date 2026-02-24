/**
 * Seminar 2.2 Transaction output
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Transaction {
    constructor(from, to, value) {
        // TODO 1 Init transaction from, to, value, spent, hash 
        this.from = from;
        this.to = to;
        this.value = value;
        this.spent = false;

        const hashData = this.from + this.to + this.value;
        this.hash = SHA256(utf8ToBytes(hashData))
    }
    spend() {
        // TODO 2 Check is transaction spent
        if (this.spent){
            throw new Error('Already spended!');
        }
        this.spent = true
    }
}

module.exports = { Transaction }
