export interface ICryptoUtils {
    setGlobelKey(key: string): ICryptoUtils;
    setGlobelIV(iv: string): ICryptoUtils;
    encrypto(str: string): string;
    decrypto(str: string): string;
}
export declare const cryptoUtils: ICryptoUtils;
