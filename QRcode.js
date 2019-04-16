const fs = require('fs');
const qrcode = require('qrcode');

// Signature from sign.js
const signature = fs.readFileSync('signature.txt', 'utf-8');

run().catch(error => console.error(error.stack));

async function run() {
  const res = await qrcode.toDataURL(signature);

  fs.writeFileSync('./qr.html', `<img src="${res}">`);
  console.log('Wrote to ./qr.html');
}