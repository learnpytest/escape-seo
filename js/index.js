import structuredDataText from "./structuredDataText.js"
const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = JSON.stringify(structuredDataText);
document.head.appendChild(script);