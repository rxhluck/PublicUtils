import { DateConfig, DateFormat } from '../types'
import { isValidDate } from './../helpers/util'

export function transformDate(config: DateConfig): string {
  const { format = 'YYYY-MM-DD HH:MM:SS', date } = config

  let _date = isValidDate(date)
    ? new Date(date)
    : (() => {
        console.error('日期字符串格式有误,已展示当前时间')
        return new Date()
      })()

  return transform(_date, format)
}

function transform(date: any, format: string): string {
  if (format.indexOf('YYYY') >= 0) {
    format = format.replace('YYYY', digits(date.getFullYear(), 4))
  }

  if (format.indexOf('MM') >= 0) {
    format = format.replace('MM', digits(date.getMonth() + 1, 2))
  }

  if (format.indexOf('DD') >= 0) {
    format = format.replace('DD', digits(date.getDate(), 2))
  }

  if (format.indexOf('HH') >= 0) {
    format = format.replace('HH', digits(date.getHours(), 2))
  }

  if (format.indexOf('hh') >= 0) {
    let hour = date.getHours() % 12
    hour = hour === 0 ? 12 : hour
    format = format.replace('hh', digits(hour, 2))
  }

  if (format.indexOf('mm') >= 0) {
    format = format.replace('mm', digits(date.getMinutes(), 2))
  }

  if (format.indexOf('ss') >= 0) {
    format = format.replace('ss', digits(date.getSeconds(), 2))
  }

  return format
}

function digits(value: number, length: number): string {
  let result = value.toString()
  if (result.length < length) {
    let num = length - result.length
    for (let i = 0; i < num; i++) {
      result = '0' + result
    }
  }
  return result
}
