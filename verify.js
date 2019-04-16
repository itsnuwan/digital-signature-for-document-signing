const crypto = require('crypto');
const fs = require('fs');

// See keys/README.md on how to generate this key
const public_key = fs.readFileSync('keys/publicKey.pem', 'utf-8');

// Signature from sign.js
const signature = fs.readFileSync('signature.txt', 'utf-8');

// File to be signed
const doc = fs.readFileSync('sample-doc.txt');

// Signing
const verifier = crypto.createVerify('RSA-SHA256');
verifier.write(doc);
verifier.end();

// Verify file signature ( support formats 'binary', 'hex' or 'base64')
const result = verifier.verify(public_key, signature, 'base64');

console.log('Digital Signature Verification : ' + result);