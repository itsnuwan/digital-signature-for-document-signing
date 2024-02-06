const {
    generateKeyPair,
  } = require('node:crypto');

const util = require('node:util');
const fs = require('fs/promises');

const generateKeyPairAsync = util.promisify(generateKeyPair)

async function generateKeys() {
    const { publicKey, privateKey } = await generateKeyPairAsync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
          type: 'spki',
          format: 'pem',
        },
        privateKeyEncoding: {
          type: 'pkcs8',
          format: 'pem',
          cipher: 'aes-256-cbc',
          passphrase: 'secret to encode/decode generated key before use',
        },
      });


    await Promise.all([
        fs.writeFile('keys/privateKey.pem', privateKey), 
        fs.writeFile('keys/publicKey.pem', publicKey)
    ])

}

generateKeys();


