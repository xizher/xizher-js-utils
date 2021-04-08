export const regUtils = {
  /** 是否为中文字符 */
  testChinese (str: string) : boolean {
    return /[\u4e00-\u9fa5]/.test(str)
  },
  /** 是否为Email */
  testEmail (str: string) : boolean {
    return /^([a-zA-Z]|[0-9])(\w|\\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(str)
  },
  /** 是否为数字 */
  testNumber (str: string | number) : boolean {
    return /^[0-9]+$/.test(str as string)
  },
  /** 是否为中文字符或英文字符 */
  testChEn (str: string) : boolean {
    return /^[a-zA-Z\u4e00-\u9fa5]+$/.test(str)
  }
}
