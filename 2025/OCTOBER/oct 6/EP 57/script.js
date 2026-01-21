function getTextNodes(root) {
  let textNodes = [];

  for (let node of root.childNodes) {
    // If it's a text node and not just whitespace
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
      textNodes.push(node);
    }
    // If it's an element node, go deeper (recursion)
    else if (node.nodeType === Node.ELEMENT_NODE) {
      textNodes = textNodes.concat(getTextNodes(node));
    }
  }

  return textNodes;
}
