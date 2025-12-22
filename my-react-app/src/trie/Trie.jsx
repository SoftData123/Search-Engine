class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.url = null; // store URL at end node
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word, url) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
    node.url = url; // save the link here
  }

  search(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }
    return this.collectWords(node, prefix);
  }

  collectWords(node, prefix) {
    let results = [];
    if (node.isEnd) results.push({ keyword: prefix, url: node.url });

    for (let char in node.children) {
      results = results.concat(
        this.collectWords(node.children[char], prefix + char)
      );
    }
    return results;
  }

  exactSearch(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    return node.isEnd ? node.url : null;
  }
}

export default Trie;
