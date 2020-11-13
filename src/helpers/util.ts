let toString = Object.prototype.toString

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isString(val: any): val is string {
  return typeof val !== 'undefined' && toString.call(val) === '[object String]'
}

export function isArray(val: any): val is any[] {
  return typeof val !== 'undefined' && toString.call(val) === '[object Array]'
}

export function isNumber(val: any): val is number {
  return typeof val !== 'undefined' && toString.call(val) === '[object Number]'
}

export function isBoolean(val: any): val is boolean {
  return typeof val !== 'undefined' && toString.call(val) === '[object Boolean]'
}

export function isEmptyPlainObject(val: any): boolean {
  return typeof val !== 'undefined' && isPlainObject(val) && Object.keys(val).length === 0
}

export function isValidDate(val: any): boolean {
  const _date = new Date(val)
  return typeof val !== 'undefined' && _date instanceof Date && !isNaN(_date.getTime())
}

export function isStringArray(val: any): val is string[] {
  let result = true
  if (isArray(val)) {
    for (let i = 0; i < val.length; i++) {
      if (!isString(val[i])) {
        result = false
        break
      }
    }
  }
  return result
}

export function isSameType(data: any, defaultData: any): boolean {
  if (isPlainObject(data) && isPlainObject(defaultData)) {
    return true
  }

  if (isString(data) && isString(defaultData)) {
    return true
  }

  if (isArray(data) && isArray(defaultData)) {
    return true
  }

  if (isNumber(data) && isNumber(defaultData)) {
    return true
  }

  if (isBoolean(data) && isBoolean(defaultData)) {
    return true
  }

  return false
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
