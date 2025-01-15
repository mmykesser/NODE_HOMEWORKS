const testUrl = new URL ('https://example.com/path?name=Node.js');

console.log('Protocol: ', testUrl.protocol);
console.log('Path:', testUrl.pathname);
console.log('Parameters:', testUrl.searchParams.get('name'));