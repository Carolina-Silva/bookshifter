export default class CookieManager {

  setCookie(name, value) {
      document.cookie = name + "=" + (value || "") + "; path=/";
  }
  getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
  }

  deleteCookie(name) {
      document.cookie = name + '=; Max-Age=-99999999; path=/';
  }
}