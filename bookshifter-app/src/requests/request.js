const AxiosRequest = require('./AxiosRequest');

class Request {
  constructor(requestAPI) {
    this.requestAPI = requestAPI;
  }

  insertToken(token) {
    this.requestAPI.insertToken(`Bearer ${token}`);
  }

  async get(url) {
    const axiosResponse = await this.requestAPI.getRequest().get(url);
    const response = {
      statusCode: axiosResponse.status,
      header: axiosResponse.headers,
      body: axiosResponse.data,
    };
    return response;
  }

  async post(url, body) {
    const axiosResponse = await this.requestAPI.getRequest().post(url, body);
    const response = {
      statusCode: axiosResponse.status,
      header: axiosResponse.headers,
      body: axiosResponse.data,
    };
    return response;
  }

  async put(url, body) {
    const axiosResponse = await this.requestAPI.getRequest().put(url, body);
    const response = {
      statusCode: axiosResponse.status,
      header: axiosResponse.headers,
      body: axiosResponse.data,
    };
    return response;
  }

  async patch(url, body) {
    const axiosResponse = await this.requestAPI.getRequest().patch(url, body);
    const response = {
      statusCode: axiosResponse.status,
      header: axiosResponse.headers,
      body: axiosResponse.data,
    };
    return response;
  }

  async delete(url) {
    const axiosResponse = await this.requestAPI.getRequest().delete(url);
    const response = {
      statusCode: axiosResponse.status,
      header: axiosResponse.headers,
      body: axiosResponse.data,
    };
    return response;
  }
}

module.exports = {
  Request
};
