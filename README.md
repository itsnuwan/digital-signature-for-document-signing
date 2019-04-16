# Digital signature from javascript crypto

This repository contains code sample of nodejs crypo built in library for digital signature of document signing
Read more details of javascript cypto library [here](https://nodejs.org/docs/v0.4.2/api/all.html#crypto)

### Files and directories
- `./keys`  - Directory contains sample public and private key.You MUST generate your own key for real usage
- `signature.txt` - sign.js will write generated signature on this file.It will be overritten each time you run sign.js
- `sample-doc.txt` - This is a sample document to be signed.You can use any document type for this.Just change the document path of sign.js and verify.js files accordingly.
- `sign.js` - Code script to generate digital signature
- `verify.js` - Code script to verify generated gidital signature

### Todos
 - Write MORE Tests
 - ES6

License
----

MIT


**Free Software, Hell Yeah!**