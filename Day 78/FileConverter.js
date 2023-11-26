const { JSDOM } = require('jsdom');

function htmlToJsx(htmlString) {
  const dom = new JSDOM(htmlString);
  const doc = dom.window.document;

  function traverse(node) {
    let jsx = '';

    const attributes = Array.from(node.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ');

    jsx += `<${node.tagName.toLowerCase()} ${attributes}>`;

    for (const childNode of node.childNodes) {
      if (childNode.nodeType === 3) {
        jsx += childNode.textContent;
      } else {
        jsx += traverse(childNode);
      }
    }

    jsx += `</${node.tagName.toLowerCase()}>`;

    return jsx;
  }

  return traverse(doc.body);
}

// Example usage
const htmlString = '<div class="example"><p>Hello, <strong>world!</strong></p></div>';
const jsxString = htmlToJsx(htmlString);
console.log(jsxString);
