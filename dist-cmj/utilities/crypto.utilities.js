"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoUtils = void 0;
const crypto_js_1 = require("crypto-js");
const enc_utf8_1 = __importDefault(require("crypto-js/enc-utf8"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const enc_hex_1 = __importDefault(require("crypto-js/enc-hex"));
const pad_pkcs7_1 = __importDefault(require("crypto-js/pad-pkcs7"));
let STRING_CRYPTO_IV = '5201314';
let STRING_CRYPTO_KEY = '5201314520131452013145201314';
exports.cryptoUtils = {
    setGlobelKey(key) {
        STRING_CRYPTO_KEY = key;
        return exports.cryptoUtils;
    },
    setGlobelIV(iv) {
        STRING_CRYPTO_IV = iv;
        return exports.cryptoUtils;
    },
    encrypto(str, options = {}) {
        const key = enc_utf8_1.default.parse(options.key ?? STRING_CRYPTO_KEY);
        const iv = enc_utf8_1.default.parse(options.iv ?? STRING_CRYPTO_IV);
        const newVal = enc_utf8_1.default.parse(str);
        const encrypted = crypto_js_1.AES.encrypt(newVal, key, {
            iv,
            mode: crypto_js_1.mode.CBC,
            padding: pad_pkcs7_1.default,
        });
        return encrypted.ciphertext.toString();
    },
    decrypto(str, options = {}) {
        const key = enc_utf8_1.default.parse(options.key ?? STRING_CRYPTO_KEY);
        const iv = enc_utf8_1.default.parse(options.iv ?? STRING_CRYPTO_IV);
        const encryptedHexStr = enc_hex_1.default.parse(str);
        const newVal = enc_base64_1.default.stringify(encryptedHexStr);
        const decrypt = crypto_js_1.AES.decrypt(newVal, key, {
            iv,
            mode: crypto_js_1.mode.CBC,
            padding: pad_pkcs7_1.default
        });
        const decryptedStr = decrypt.toString(enc_utf8_1.default);
        return decryptedStr.toString();
    }
};
