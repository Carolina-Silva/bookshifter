import AxiosRequest from '../lib/utils/requests/AxiosRequest';
import { Request } from '../lib/utils/requests/request';

const baseUrl = 'sua-url-base-aqui'; // Substitua 'sua-url-base-aqui' pela URL base real

export const axiosRequest = new AxiosRequest(baseUrl);

export const request = new Request(axiosRequest);
