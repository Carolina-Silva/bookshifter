export default class Hook {
  setNavigate(navigate) {
    this.navigate = navigate;
  }

  setAlert(alertContext) {
    this.alertContext = alertContext;
  }

  static httpError(reason) {
    if (!(reason instanceof Error)) {
      return '/error/500';
    }
    if (reason.code === 'ERR_NETWORK') {
      return '/error/500';
    }

    const { data } = reason.response;
    switch (data.statusCode) {
      case 400:
        return data;
      case 401:
        return '/login';
      case 403:
        return data;
      case 404:
        return data;
      case 500:
        return '/error/500';
      default:
        return data;
    }
  }

  handleException(reason) {
    if (reason instanceof Error) {
      this.alertContext.setAlert({
        type: 'error',
        open: true,
        message: reason.message,
      });
    } else {
      const error = Hook.httpError(reason);
      if (typeof error === 'string') {
        this.navigate(error);
      } else {
        const response = error;
        this.alertContext.setAlert({
          type: 'error',
          open: true,
          message: `${response.error} (${response.statusCode}): ${response.message}`,
        });
      }
    }
  }
}
