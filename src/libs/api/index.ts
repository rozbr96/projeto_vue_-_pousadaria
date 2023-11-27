
class API {
  static HOST = 'http://localhost:3000/api/v1'

  static getFullEndpoint(endpoint: string) {
    return `${API.HOST}${endpoint}`
  }

  static get<T>(endpoint: string): Promise<T> {
    return fetch(API.getFullEndpoint(endpoint))
      .then(response => response.json())
  }
}


export default API
