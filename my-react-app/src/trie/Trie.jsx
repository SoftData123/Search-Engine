class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.url = "";
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
    node.url = url;
  }

  search(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) return [];
      node = node.children[char];
    }

    return this.collect(node, prefix);
  }

  collect(node, prefix) {
    let result = [];

    if (node.isEnd) {
      result.push({
        keyword: prefix,
        url: node.url
      });
    }

    for (let char in node.children) {
      result = result.concat(
        this.collect(node.children[char], prefix + char)
      );
    }

    return result;
  }
}

export default Trie;