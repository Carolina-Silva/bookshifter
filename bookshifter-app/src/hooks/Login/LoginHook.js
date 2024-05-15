import Hook from "../Hook";

export default class LoginHook extends Hook {
  constructor(loginRequest) {
    super();
    this.loginRequest = loginRequest;
  }

  async authenticateUser(loginData, alertContext) {
    try {
      if (!this.validate(loginData, alertContext)) {
        return null;
      }

      const response = await this.loginRequest.authenticateUser(loginData);
      const data = response.data.user; // Corrigido para 'response.data'

      return data;
    } catch (error) {
      const { response } = error;
      const message = response?.data?.message;
      if (response?.status === 400 && alertContext) {
        alertContext.setAlert({
          type: 'error',
          open: true,
          message: 'E-mail ou senha inválidos',
        });

        return null;
      }

      if (response?.status === 401 && alertContext && message === 'unchecked user') {
        alertContext.setAlert({
          type: 'error',
          open: true,
          message: 'Usuário não foi verificado. Por favor verifique o seu email para ativar a sua conta',
        });

        return null;
      }

      if (response?.status === 401 && alertContext && message === 'deactivated user') {
        alertContext.setAlert({
          type: 'error',
          open: true,
          message: 'Usuário não foi ativado. Espere que um administrador ative a sua conta',
        });

        return null;
      }

      this.handleException(error);
      return null;
    }
  }

  async forgotPassword(userEmail) {
    try {
      const response = await this.loginRequest.forgotPassword(userEmail);
      const data = response.data; // Corrigido para 'response.data'
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  async resetPassword(resetPassword) {
    try {
      const response = await this.loginRequest.resetPassword(resetPassword);
      const data = response.data; // Corrigido para 'response.data'
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  async registerUser(userData) {
    try {
      const response = await this.loginRequest.registerUser(userData);
      const data = response.data; // Corrigido para 'response.data'
      return data;
    } catch (error) {
      this.handleException(error);
      return null;
    }
  }

  validate(loginData, alertContext) {
    const { email, password } = loginData;

    if (!email || !password) {
      if (alertContext) {
        alertContext.setAlert({
          type: 'error',
          open: true,
          message: 'E-mail ou senha estão em branco',
        });
      }
      return false;
    }

    return true;
  }
}
