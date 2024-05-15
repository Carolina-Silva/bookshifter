import { request } from '../index';
import LoginRequest from './login';

const loginRequest = new LoginRequest(request);

export default loginRequest;
