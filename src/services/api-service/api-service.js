import axios from 'axios'
import _isEmpty from 'lodash/isEmpty'

import { flattenQuery } from './middlewares/flatten-query'
import { parseJsonapiResponse } from './middlewares/parse-json-api-response'

const methods = Object.freeze({
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT',
  GET: 'GET',
  DELETE: 'DELETE',
})

const MIME_TYPE_JSON_API = 'application/json'

const HEADER_CONTENT_TYPE = 'Content-Type'
const HEADER_ACCEPT = 'Accept'
const HEADER_TOKEN = 'x-access-token'

export class ApiService {
  constructor ({ axios, apiUrl }) {
    this._axios = axios
    this._apiUrl = apiUrl
  }

  static getInstance (apiUrl) {
    return new ApiService({
      apiUrl,
      axios: axios.create(),
    })
  }

  get ({ endpoint, query, token }) {
    return this._call({
      method: methods.GET,
      token,
      endpoint,
      query,
    })
  }

  post ({ endpoint, data, token }) {
    return this._call({
      method: methods.POST,
      endpoint,
      token,
      data,
    })
  }

  patch ({ endpoint, data, token }) {
    return this._call({
      method: methods.PATCH,
      token,
      endpoint,
      data,
    })
  }

  put ({ endpoint, data, token }) {
    return this._call({
      method: methods.PUT,
      token,
      endpoint,
      data,
    })
  }

  delete ({ endpoint, data, token }) {
    return this._call({
      method: methods.DELETE,
      token,
      endpoint,
      data,
    })
  }

  /**
   * Performs a request
   *
   * @param {object} opts
   * @param {string} opts.endpoint - endpoint where to make the call to, e.g. `/posts`
   * @param {object} opts.data - request data (for POST/PUT requests)
   * @param {object} opts.query - request query params
   * @param {string} opts.method - HTTP method of request
   * @param {bool} [opts.token] - authentication token
   *
   * @private
   */
  async _call (opts) {
    let config = {
      baseURL: this._apiUrl,
      params: flattenQuery(opts.query || {}),
      paramsSerializer: function (params) {
        return Object.entries(params)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&')
      },
      data: opts.data || {},
      method: opts.method,
      url: opts.endpoint,
      headers: {
        [HEADER_CONTENT_TYPE]: MIME_TYPE_JSON_API,
        [HEADER_ACCEPT]: MIME_TYPE_JSON_API,
      },
    }

    if (opts.token) {
      config.headers[HEADER_TOKEN] = opts.token
    }

    let response
    try {
      response = await this._axios(config)
      response = parseJsonapiResponse(response)

      if (!_isEmpty(response.links)) {
        if (opts.needSign) {
          response.makeLinkCallersWithSignature(this)
        } else {
          response.makeLinkCallers(this)
        }
      }
    } catch (e) {
      throw e
    }

    return response.data
  }
}
