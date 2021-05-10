/* eslint-disable no-undef */
import { cryptoUtils } from '../../dist'

test('encrypto and decrypto: can run true', () => {
  const str = 'hello world'
  const enStr = cryptoUtils.encrypto(str)
  console.log(enStr)
  const deStr = cryptoUtils.decrypto(enStr)
  expect(deStr).toBe(str)
})
