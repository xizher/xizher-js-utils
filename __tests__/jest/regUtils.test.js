/* eslint-disable no-undef */
import { regUtils } from '../../dist'

test('testChinese: can run true', () => {
  expect(regUtils.testChinese('')).toBe(false)
  expect(regUtils.testChinese(' ')).toBe(false)
  expect(regUtils.testChinese('中')).toBe(true)
  expect(regUtils.testChinese('。')).toBe(false)
  expect(regUtils.testChinese('a')).toBe(false)
  expect(regUtils.testChinese('1')).toBe(false)
})

test('testEmail: can run true', () => {
  expect(regUtils.testEmail('')).toBe(false)
  expect(regUtils.testEmail('xizher@163.com')).toBe(true)
  expect(regUtils.testEmail('xizher@163.comfewfaewn')).toBe(false)
  expect(regUtils.testEmail('xizher163.com')).toBe(false)
})

test('testNumber: can run true', () => {
  expect(regUtils.testNumber('')).toBe(false)
  expect(regUtils.testNumber(' ')).toBe(false)
  expect(regUtils.testNumber('2 ')).toBe(false)
  expect(regUtils.testNumber('23')).toBe(true)
  expect(regUtils.testNumber(2)).toBe(true)
  expect(regUtils.testNumber(-2)).toBe(false)
  expect(regUtils.testNumber('02')).toBe(true)
  expect(regUtils.testNumber(2n)).toBe(true)
})

test('testChEn: can run true', () => {
  expect(regUtils.testChEn('')).toBe(false)
  expect(regUtils.testChEn(' ')).toBe(false)
  expect(regUtils.testChEn('中')).toBe(true)
  expect(regUtils.testChEn('。')).toBe(false)
  expect(regUtils.testChEn('.')).toBe(false)
  expect(regUtils.testChEn('a')).toBe(true)
  expect(regUtils.testChEn('a中')).toBe(true)
  expect(regUtils.testChEn('1')).toBe(false)
})
