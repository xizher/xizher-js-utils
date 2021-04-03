import { AES, mode } from 'crypto-js';
import Utf8 from 'crypto-js/enc-utf8';
import Base64 from 'crypto-js/enc-base64';
import Hex from 'crypto-js/enc-hex';
import Pkcs7 from 'crypto-js/pad-pkcs7';
let STRING_CRYPTO_IV = '5201314';
let STRING_CRYPTO_KEY = '5201314520131452013145201314';
export const cryptoUtils = {
    setGlobelKey(key) {
        STRING_CRYPTO_KEY = key;
        return cryptoUtils;
    },
    setGlobelIV(iv) {
        STRING_CRYPTO_IV = iv;
        return cryptoUtils;
    },
    encrypto(str) {
        const key = Utf8.parse(STRING_CRYPTO_KEY);
        const iv = Utf8.parse(STRING_CRYPTO_IV);
        const newVal = Utf8.parse(str);
        const encrypted = AES.encrypt(newVal, key, {
            iv,
            mode: mode.CBC,
            padding: Pkcs7,
        });
        return encrypted.ciphertext.toString();
    },
    decrypto(str) {
        const key = Utf8.parse(STRING_CRYPTO_KEY);
        const iv = Utf8.parse(STRING_CRYPTO_IV);
        const encryptedHexStr = Hex.parse(str);
        const newVal = Base64.stringify(encryptedHexStr);
        const decrypt = AES.decrypt(newVal, key, {
            iv,
            mode: mode.CBC,
            padding: Pkcs7
        });
        const decryptedStr = decrypt.toString(Utf8);
        return decryptedStr.toString();
    }
};
