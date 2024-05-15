import axios from 'axios';
import AxiosRequest from './AxiosRequest';

/**
 * @typedef {Object} Response
 * @property {number} statusCode
 * @property {Object} header
 * @property {any} body
 */

/**
 * @typedef {Object} RequestShape
 * @property {function(string): Promise<Response>} get
 * @property {function(string, any=): Promise<Response>} post
 * @property {function(string, any=): Promise<Response>} put
 * @property {function(string, any=): Promise<Response>} patch
 * @property {function(string): Promise<Response>} delete
 * @property {function(string): void} insertToken
 */

export default class Request {
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
