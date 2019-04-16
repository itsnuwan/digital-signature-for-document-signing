### Create your own provate key with following command
```
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:4096 -pkeyopt rsa_keygen_pubexp:3 -out privateKey.pem

```

### Create your public key for above private key
```
openssl pkey -in privateKey.pem -out publicKey.pem -pubout
```
