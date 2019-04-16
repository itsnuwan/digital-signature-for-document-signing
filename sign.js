const crypto = require('crypto');
const fs = require('fs');

// See keys/README.md on how to generate this key
const private_key = fs.readFileSync('keys/privateKey.pem', 'utf-8');

// File/Document to be signed
const doc = fs.readFileSync('sample-doc.txt');

// Signing
const signer = crypto.createSign('RSA-SHA256');
signer.write(doc);
signer.end();

// Returns the signature in output_format which can be 'binary', 'hex' or 'base64'
const signature = signer.sign(private_key, 'base64')

console.log('Digital Signature: ', signature);

// Write signature to the file `signature.txt`
fs.writeFileSync('signature.txt', signature);