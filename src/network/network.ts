import axios, { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { localStorageKeys } from '../constants/enums';

interface IRequestConfig extends AxiosRequestConfig {
  metadata?: any
}

const baseUrl = 'https://pmbackendapi1.azurewebsites.net';

export const network = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})

const responseErrorLogger = (err: AxiosError<any>) => {
  let responseBody = 'empty'
  if (err.response && err.response.data) {
    const responseBodyString = JSON.stringify(err.response.data)
    responseBody = responseBodyString.length !== 0 ? responseBodyString : responseBody
  }

  if (err.response && err.config.method) {
    console.log(
      `Response ${err.response.status}: ${err.config.method.toUpperCase()} - ${err.config.url}`
    )
    console.log(`Response body: ${responseBody}`)
  }
}

const responseLogger = (response: AxiosResponse<any>) => {
  let responseBody = 'empty'
  if (response && response.data) {
    const responseBodyString = JSON.stringify(response.data)
    responseBody = responseBodyString.length !== 0 ? responseBodyString : responseBody
  }
  if (!!response.config.method) {
    console.log(
      `Response ${response.status}: ${response.config.method.toUpperCase()} - ${response.config.url}`
    )
  } else {
    console.log(`Response ${response.status}: [method] - ${response.config.url}`)
  }
  console.log(`Response body: ${responseBody}`)
}

const requestLogger = (reqConfig: IRequestConfig) => {
  let requestBody = 'empty'
  if (reqConfig.data) {
    const requestBodyString = JSON.stringify(reqConfig.data)
    requestBody = requestBodyString.length !== 0 ? requestBodyString : requestBody
  }
  if (!!reqConfig.method) {
    console.log(
      `Request: ${reqConfig.method.toUpperCase()} - ${reqConfig.url} ${JSON.stringify(
        reqConfig.params
      )}`
    )
  } else {
    console.log(`Request: [method] - ${reqConfig.url} ${JSON.stringify(reqConfig.params)}`)
  }
  console.log(`Request body: ${requestBody}`)
}

network.interceptors.request.use(
  async (reqConfig: IRequestConfig) => {
    requestLogger(reqConfig)

    let token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    console.log(token)

    reqConfig.headers = {
      ...reqConfig.headers,
      Authorization: `Bearer ${token}`
    }

    return reqConfig
  },
  (err: AxiosError<any>) => Promise.reject(err)
)

network.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    responseLogger(response)
    return response
  },
  async (err: AxiosError<any>) => {
    responseErrorLogger(err)
    return Promise.reject(err)
  }
)
