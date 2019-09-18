import axios from 'axios'
import { Message } from 'element-ui'
import { param } from '@/utils'
import { omit } from 'lodash'
const makeParams = data => {
  var params = ''
  if (typeof data === 'object') {
    params = param(data)
  } else {
    if (data) {
      params = data
    }
  }
  return params
}

function makeFormParams(params) {
  const formData = new FormData()
  Object.keys(params).forEach(val => formData.append(val, params[val]))
  return formData
}
// create an axios instance
const service = axios.create({
  baseURL: '__API_BASE_PATH__',
  timeout: 30000 // request timeout
})

// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// request interceptor
service.interceptors.request.use(
  config => {
    if (config.data.hasFile) {
      const dataFileReq = {}
      dataFileReq.file = config.data.upload
      config = { ...config, data: makeFormParams(dataFileReq), url: `${config.url}?${makeParams(omit(config.data, ['upload', 'hasFile']))}` }
      config = omit(config, ['headers'])
    } else {
      config = { ...config, data: JSON.stringify(config.data) }
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    if (response.status >= 200 && response.status < 300) {
      if (response.status === 204 || response.status === 205) {
        return null
      }
      return response.data
    }

    const error = new Error(response.statusText)
    error.response = response
    throw error
  },
  error => {
    console.log('err', error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
