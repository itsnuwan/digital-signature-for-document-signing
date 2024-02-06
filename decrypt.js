const { privateDecrypt, createPrivateKey, constants: cryptoConstants } = require('crypto');
const fs = require('fs');

// See keys/README.md on how to generate this key
const encodedPrivateKeyStr = fs.readFileSync('keys/privateKey.pem', 'utf-8');

// Data to Decrypt
const data = fs.readFileSync('encrypted.txt');

const decryptedData = decryptWithRsaPrivateKey(data, encodedPrivateKeyStr);

// write Decrypted data to a file
fs.writeFileSync('decrypted.txt', decryptedData);

function decryptWithRsaPrivateKey(data, encodedPrivateKey) {

    const privateKey = createPrivateKey({
        'key': encodedPrivateKey,
        'format': 'pem',
        'type': 'pkcs8',
        'cipher': 'aes-256-cbc',
        'padding': cryptoConstants.RSA_NO_PADDING,
        'passphrase': 'secret to encode/decode generated key before use'
    })

    const buffer = Buffer.from(data, 'base64');
    const decrypted = privateDecrypt(
        {
            key: privateKey, 
            padding: cryptoConstants.RSA_NO_PADDING, 
            passphrase: 'secret to encode/decode generated key before use'
        }, buffer);
    return decrypted.toString('utf-8');
}
