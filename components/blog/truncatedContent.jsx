export default function truncateHTML(html, maxLength) {
    let truncated = "";
    let totalLength = 0;
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
  
    function traverseNodes(node) {
      if (totalLength >= maxLength) return;
  
      if (node.nodeType === Node.TEXT_NODE) {
        const remainingLength = maxLength - totalLength;
        const textContent = node.textContent.slice(0, remainingLength);
        truncated += textContent;
        totalLength += textContent.length;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        truncated += `<${node.tagName.toLowerCase()}${[...node.attributes]
          .map(attr => ` ${attr.name}="${attr.value}"`)
          .join("")}>`;
  
        for (const child of node.childNodes) {
          traverseNodes(child);
          if (totalLength >= maxLength) break;
        }
  
        truncated += `</${node.tagName.toLowerCase()}>`;
      }
    }
  
    for (const child of doc.body.childNodes) {
      traverseNodes(child);
      if (totalLength >= maxLength) break;
    }
  
    return truncated + (totalLength >= maxLength ? "" : "");
  }
  