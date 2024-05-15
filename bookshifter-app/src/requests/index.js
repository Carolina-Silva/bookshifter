import AxiosRequest from '../lib/utils/requests/AxiosRequest.js';
import  Request from '../lib/utils/requests/Request.js';

const baseUrl = 'http://localhost:3003';

export const axiosRequest = new AxiosRequest(baseUrl);

export const request = new Request(axiosRequest);
