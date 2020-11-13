import { AxiosPromise, AxiosRequestConfig, AxiosRequestHeaders, AxiosInterceptor } from '../types'
import { isEmptyPlainObject } from '../helpers/util'
import axios from 'axios'
import Qs from 'qs'

export function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  let { method, timeout, responseInterceptor, requestInterceptor } = config

  let option = {
    url: buildUrl(config),
    data: buildRequestData(config),
    method: method,
    headers: getRequestHeader(config)
  }

  if (responseInterceptor) {
    axios.interceptors.response.use(responseInterceptor.onResolved, responseInterceptor.onRejected)
  }

  if (requestInterceptor) {
    axios.interceptors.request.use(requestInterceptor.onResolved, requestInterceptor.onRejected)
  }

  const _promise = new Promise((resolve, reject) => {
    axios(option)
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        console.log(err)
        // onError(err);
        reject(err)
      })
  })

  return _promise as AxiosPromise
}

function getRequestHeader(config: AxiosRequestConfig): AxiosRequestHeaders {
  let { sign = '', contentType = 'application/x-www-form-urlencoded' } = config

  let _headers = Object.create(null)
  _headers['content-type'] = contentType
  _headers['sign'] = sign

  return _headers
}

function buildUrl(config: AxiosRequestConfig): string {
  let { params = {}, url } = config
  if (!isEmptyPlainObject(params)) {
    url = url.indexOf('?') < 0 ? `${url}?` : url
    for (let key in params) {
      url = url + `${key}=${params[key]}`
    }
  }

  return url
}

function buildRequestData(config: AxiosRequestConfig): any {
  let { data = {}, contentType = 'application/x-www-form-urlencoded' } = config

  if (contentType.toLowerCase() === 'application/x-www-form-urlencoded') {
    data = Qs.stringify(data)
  }

  return data
}
