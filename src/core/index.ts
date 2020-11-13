import { AxiosPromise, AxiosRequestConfig, DataUtils, DateConfig, LogConfig } from '../types/index'
import DataUtilsManager from './dataUtilManager'
import { dispatchRequest } from './request'
import { transformDate } from './date'
import { isPlainObject, isString } from '../helpers/util'

export default class SyHealth {
  dataUtils: DataUtils

  constructor(initConfig: any) {
    this.dataUtils = new DataUtilsManager()
  }

  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  socket(config: any): any {
    return config
  }

  md5(config: any): string {
    return 'config'
  }

  date(config: DateConfig): string {
    return transformDate(config)
  }

  log(isProd: boolean, logConfig: string | LogConfig): void {
    if (!isProd) {
      let _message
      if (isString(logConfig)) {
        _message = logConfig
      } else {
        let { msg, tag } = logConfig
        msg = isPlainObject(msg) ? JSON.stringify(msg) : msg
        _message = `${tag}:${msg}`
      }
      console.log(`PrintInformation===================>${_message}`)
    }
  }
}
