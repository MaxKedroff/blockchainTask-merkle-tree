/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO Insert word symbol by symbol
        let currentNode = this.root

        for (let i = 0; i < word.length; i++){
            const char = word[i]

            if (!currentNode.children[char]){
                currentNode.children[char] = new TrieNode(char)
            }

            currentNode = currentNode.children[char]
        }

        currentNode.isWord = true
    }

    hasNode(word){
        // TODO Check is word in Trie
        let currentNode = this.root;

        for (let i = 0; i < word.length; i++){
            const char = word[i]

            if (!currentNode.children[char]){
                return false
            }

            currentNode = currentNode.children[char]
        }
        return currentNode.isWord;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        const nodes = [];

        function traverse(node){
            if (node.key !== null){
                nodes.push(node)
            }

            for (let child in node.children){
                traverse(node.children[child])
            }
        }

        traverse(this.root)

        return nodes
    }
}

module.exports = { Trie };
