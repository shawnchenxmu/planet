import 'whatwg-fetch'
import { config } from './local'

const DEFAULT_OPTIONS = {
	method: 'GET',
	credentials: 'include',
  headers: {
    'Cache-Control': 'no-cache',
    'X-Requested-With': 'XMLHttpRequest',
    Pragma: 'no-cache'
  }
}

const DEFAULT_TIMEOUT = 10 * 2000

export function advancedFetch(fetchPromise, timeout) {
	let abortFn = null

	const abortPromise = new Promise((resolve, reject) => {
		abortFn = () => {
			reject('abort promise')
		}
	})

	const abortablePromise = Promise.race([
    fetchPromise,
    abortPromise
  ])

  setTimeout(() => {
    abortFn()
  }, timeout || DEFAULT_TIMEOUT)

  return abortablePromise

}

function transform(query) {
	return Object.keys(query).map(key => `${key}=${query[key]}`)
}

export function send(url, options, timeout) {
	let fetchUrl = config.fetchUrl + url
	if (options && options.query) {
		fetchUrl += `?${transform(options.query).join('&')}`
	}

	const fetchOptions = Object.assign({}, DEFAULT_OPTIONS, options)
	return advancedFetch(fetch(fetchUrl, fetchOptions), timeout)
		.then((response) => {
			if (response.status === 401) {
				return Promise.reject({ status: 401, data: null })
			}
			return response.json()
		})
		.then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			return Promise.reject({ message: err.message, data: err })
		})
}