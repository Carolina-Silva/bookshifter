import axios from 'axios';
import cookieManager from '../cookies/index';

class AxiosRequest {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
      withCredentials: true,
    });

    if (cookieManager.getCookie('token') !== undefined) {
      this.api.interceptors.request.use(async (config) => {
        const conf = config;
        conf.headers.authorization = `Bearer ${cookieManager.getCookie('token')}`;
        return conf;
      });
    }
  }

  static async getAuthenticatedInstance(baseUrl, token) {
    const api = new AxiosRequest(baseUrl);
    if (token) {
      await api.insertToken(token);
    }
    return api;
  }

  async insertToken(token) {
    this.api.interceptors.request.use(async (config) => {
      const conf = config;
      conf.headers.authorization = token;
      return conf;
    });
  }

  addHeader(key, value) {
    this.api.interceptors.request.use(async (config) => {
      const conf = config;
      conf.headers[key] = value;
      return conf;
    });
  }

  getRequest() {
    return this.api;
  }
}

export default AxiosRequest;
