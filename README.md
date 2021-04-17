# @xizher/js-utils
## 安装

```bash
npm install @xizher/js-utils
```

## 接口文档

### baseUtils

| 成员                   | 说明                                 |
| ---------------------- | ------------------------------------ |
| deepCopyJSON ()        | 深度复制（采用JSON解析方式）         |
| deepCopy ()            | 深度复制（采用递归式）               |
| createGuid ()          | 创建GUID                             |
| createIntRandom ()     | 创建指定范围的随机整数               |
| isFromMobileBrowser () | 判断网页是否通过移动端设备打开       |
| copyText ()            | 复制文本                             |
| $extend ()             | 对象扩展（JQuery $.extend 实现代码） |
| debounce ()            | 防抖                                 |
| throttle ()            | 节流                                 |
| loadCss ()             | 加载css                              |
| loadJs ()              | 加载js                               |
| getArrayItemRandom ()  | 随机获取数组中的一个子集                               |

### cookieUtils

| 成员          | 说明                                 |
| ------------- | ------------------------------------ |
| set ()        | 设置Cookie                           |
| del ()        | 删除Cookie                           |
| get ()        | 获取Cookie                           |
| getUseJSON () | 取Cookie（结果为经过JSON解析的对象） |

### storageUtils

| 成员                  | 说明                           |
| --------------------- | ------------------------------ |
| local.set ()          | 设置LocalStorage               |
| local.get ()          | 获取LocalStorage               |
| local.getUseJSON ()   | 获取经过JSON解析的LocalStorage |
| local.remove()        | 移除指定LocalStorage           |
| local.clear ()        | 清空LocalStorage               |
| session.set ()        | 设置SessionStorage             |
| session.get ()        | 获取SessionStorage             |
| session.getUseJSON () | 获取经过JSON解析的LocalStorage |
| session.remove ()     | 移除指定SessionStorage         |
| session.clear ()      | 清空SessionStorage             |

### descriptoUtils

| 成员        | 说明                     |
| ----------- | ------------------------ |
| AutoBind () | 自动绑定this上下文装饰器 |
| Debounce () | 防抖                     |
| Throttle () | 节流                     |

### cryptoUtils

| 成员            | 说明        |
| --------------- | ----------- |
| setGlobelKey () | 设置全局Key |
| setGlobelIV ()  | 设置全局IV  |
| encrypto ()     | 加密字符串  |
| decrypto ()     | 解密字符串  |

## 使用样例

```javascript
import { baseUtils } from '@xizher/js-utils'

test('deepCopyJSON: can run true', () => {

  const obj = {
    a: 1, b: '2', c: '', d: false, e: {}, f: () => 1, g: null, h: class {}
  }
  const newObj = baseUtils.deepCopyJSON(obj)

  expect(newObj !== obj).toBe(true)
  expect(newObj.a).toBe(1)
  expect(newObj.b).toBe('2')
  expect(newObj.c === '').toBe(true)
  expect(newObj.d).toBe(false)
  expect(typeof newObj.e).toBe('object')
  expect(typeof newObj.f === 'undefined').toBe(true)
  expect(newObj.g === null).toBe(true)
  expect(typeof newObj.h === 'undefined').toBe(true)
})

test('deepCopy: can run true', () => {

  const obj = {
    a: 1, b: '2', c: '', d: false, e: {}, f: () => 1, g: null, h: class {}
  }
  const newObj = baseUtils.deepCopy(obj)

  expect(newObj !== obj).toBe(true)
  expect(newObj.a).toBe(1)
  expect(newObj.b).toBe('2')
  expect(newObj.c === '').toBe(true)
  expect(newObj.d).toBe(false)
  expect(typeof newObj.e).toBe('object')
  expect(newObj.f()).toBe(1)
  expect(newObj.g === null).toBe(true)
  expect(typeof newObj.h).toBe('function')
})

test('createGuid: can run true', () => {
  const guid = baseUtils.createGuid()
  expect(guid.length).toBe(36)
})

test('createIntRandom: can run true', () => {
  const num = baseUtils.createIntRandom(0, 1)
  expect(num === 1 || num === 0).toBe(true)
})


test('$extend: can run true', () => {
  const obj = { a: 1, b: { b1: 2 } }
  baseUtils.$extend(true, obj, {
    c: 2, b: { b2: 3 }
  })
  expect(obj.a).toBe(1)
  expect(obj.c).toBe(2)
  expect(obj.b.b1).toBe(2)
  expect(obj.b.b2).toBe(3)
})
```

```javascript
import { cryptoUtils } from '@xizher/js-utils'

test('encrypto and decrypto: can run true', () => {
  const str = 'hello world'
  const enStr = cryptoUtils.encrypto(str)
  const deStr = cryptoUtils.decrypto(enStr)
  expect(deStr).toBe(str)
})

```

