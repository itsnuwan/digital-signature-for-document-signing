const { publicEncrypt } = require('crypto');
const fs = require('fs');

// See keys/README.md on how to generate this key
const publicKey = fs.readFileSync('keys/publicKey.pem', 'utf-8');

// Data to Encrypt
const data = fs.readFileSync('sample-doc.txt');

const encryptedData = encryptWithRsaPublicKey(data, publicKey);

// write encrypted data to a file
fs.writeFileSync('encrypted.txt', encryptedData);


function encryptWithRsaPublicKey(data, publicKey) {
    const buffer = Buffer.from(data, 'utf-8')
    const encrypted = publicEncrypt(publicKey, buffer)
    return encrypted.toString('base64')
}
