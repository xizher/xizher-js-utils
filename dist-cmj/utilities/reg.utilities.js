"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regUtils = void 0;
exports.regUtils = {
    /** 是否为中文字符 */
    testChinese(str) {
        return /[\u4e00-\u9fa5]/.test(str);
    },
    /** 是否为Email */
    testEmail(str) {
        return /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(str);
    },
    /** 是否为数字 */
    testNumber(str) {
        return /^[0-9]+$/.test(str);
    },
    /** 是否为中文字符或英文字符 */
    testChEn(str) {
        return /^[a-zA-Z\u4e00-\u9fa5]+$/.test(str);
    }
};
