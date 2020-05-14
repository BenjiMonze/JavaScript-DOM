const banner = document.querySelector('#page-banner');

console.log('#page-banner node type is:', banner.nodeType);
console.log('#page-banner node name is:', banner.nodeName);
console.log('#page-banner node has child nodes:', banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
//If you don't pass in true, it won't give all the nested elements in the cloned element.
//const clonedBanner = banner.cloneNode(false);

console.log(clonedBanner);