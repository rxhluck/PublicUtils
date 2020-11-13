import { isString, isSameType, isPlainObject } from '../helpers/util'

export default class DataUtilManager {
  getNextValue(data: any, key: string): any {
    if (isPlainObject(data)) {
      return data.hasOwnProperty(key) ? data[key] : false
    } else {
      console.error('参数类型错误')
      return false
    }
  }

  getValue<T = any>(data: any, keys: string | string[], defaultValue: T): T {
    if (isString(keys)) {
      if (data.hasOwnProperty(keys)) {
        return isSameType(data[keys], defaultValue) ? data[keys] : defaultValue
      } else {
        return defaultValue
      }
    } else {
      let _value = data
      for (let i = 0; i < keys.length; i++) {
        if (_value) {
          _value = this.getNextValue(_value, keys[i])
        } else {
          _value = false
          break
        }
      }

      return _value !== false ? _value : defaultValue
    }
  }

  getNumber(data: any, keys: string | string[]): number {
    return this.getValue<number>(data, keys, 0)
  }

  getString(data: any, keys: string | string[]): string {
    return this.getValue<string>(data, keys, '')
  }

  getObject(data: any, keys: string | string[]): object {
    return this.getValue<object>(data, keys, {})
  }

  getList(data: any, keys: string | string[]): any[] {
    return this.getValue<any[]>(data, keys, [])
  }

  getBoolean(data: any, keys: string | string[]): boolean {
    return this.getValue<boolean>(data, keys, true)
  }

  getDeepValue(data: any, keys: string[]): any {
    return this.getValue<any>(data, keys, '')
  }
}
