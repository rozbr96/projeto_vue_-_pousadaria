
const HOST = import.meta.env.VITE_API_HOST || 'localhost'
const PORT = import.meta.env.VITE_API_PORT || 3000
const BASIC_ENDPOINT = import.meta.env.VITE_API_BASIC_ENDPOINT || '/api/v1'


class API {
  static FULL_HOST = `http://${HOST}:${PORT}/${BASIC_ENDPOINT}`

  static getFullEndpoint(endpoint: string) {
    return `${API.FULL_HOST}${endpoint}`
  }

  static get<T>(endpoint: string): Promise<T> {
    return fetch(API.getFullEndpoint(endpoint))
      .then(response => response.json())
  }
}


export default API
