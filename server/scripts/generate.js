const  { secp } = require("ethereum-cryptography/secp256k1");
const  { toHex } = require("ethereum-cryptography/utils");

const privatkey = secp.utils.randomPrivateKey();
const privateKey = toHex(privatkey);

console.log("privateKey:", privateKey);

const publiKey = secp256k1.getPublicKey(privatkey);
const publicKey = toHex(publiKey);

console.log("publicKey:", publicKey);
