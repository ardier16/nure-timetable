import { ApiService } from '@services/api-service'

let _api = null

export function initApi (apiUrl) {
  if (!apiUrl) {
    throw new Error('API URL is not provided')
  }

  _api = ApiService.getInstance(apiUrl)
}

export function api () {
  if (!_api) {
    throw new Error('API is not initialized')
  } else {
    return _api
  }
}
