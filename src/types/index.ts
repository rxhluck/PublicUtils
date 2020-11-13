export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'options'
  | 'OPTIONS'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'head'
  | 'HEAD'
  | 'patch'
  | 'PATCH'

export type contentType =
  | 'application/x-www-form-urlencoded'
  | 'multipart/form-data'
  | 'application/json'

export interface SyHealth {
  dataUtils: DataUtils

  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>

  socket(config: any): any

  md5(config: any): string

  date(config: DateConfig): string

  log(isProd: boolean, msg: string | LogConfig): void
}

/// 混合对象
export interface SyHealthInstance extends SyHealth {
  (config: any): SyHealth
}

// export interface SyHealthStatic extends SyHealthInstance {
//   create(config?: AxiosRequestConfig): SyHealthInstance
// }

export interface AxiosRequestConfig {
  method?: Method
  url: string
  data?: any
  params?: any
  sign?: any
  contentType?: contentType
  timeout?: number
  requestInterceptor?: AxiosInterceptor
  responseInterceptor?: AxiosInterceptor
}

export interface AxiosInterceptor {
  onResolved: <T>(config: any) => T
  onRejected: (config: any) => any
}

export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: any
  request: any
}

export interface AxiosRequestHeaders {}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface DataUtils {
  getNumber(data: any, key: string | string[]): number

  getString(data: any, key: string | string[]): string

  getObject(data: any, key: string | string[]): Object

  getList<T = any>(data: any, key: string | string[]): Array<T>

  getBoolean(data: any, key: string | string[]): boolean

  getDeepValue(data: any, key: string[]): any
}

export type DateFormat =
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DD'
  | 'MM-DD'
  | 'YYYY-MM'
  | 'HH:mm'
  | 'mm:ss'

export interface DateConfig {
  format: DateFormat
  date: number | string
}

export interface LogConfig {
  tag: string
  msg: any
}
