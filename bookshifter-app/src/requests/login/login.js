import cookieManager from '../../lib/utils/cookies';

export default class LoginRequest {
  constructor(request) {
    this.url = '/login';
    this.request = request;
  }

  async authenticateUser(loginData) {
    const response = await this.request.post(`${this.url}/login`, loginData);
    const { token } = response.body;
    if (token) {
      cookieManager.setCookie('token', token);
      this.request.insertToken(token);
    }
    return response;
  }

  async forgotPassword(userEmail) {
    const response = await this.request.post(`${this.url}/forgot-password`, { email: userEmail });
    return response;
  }

  async resetPassword(resetPassword) {
    const response = await this.request.patch(`${this.url}/reset-password`, resetPassword);
    return response;
  }

  async registerUser(user) {
    const response = await this.request.post(`/register`, user);
    return response;
  }
}

