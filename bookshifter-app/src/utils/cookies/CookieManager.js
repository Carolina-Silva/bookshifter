class CookieManager {
  constructor(cookieManager) {
    this.cookieManager = cookieManager;
  }

  getItem(key) {
    return this.cookieManager.get(key);
  }

  createItem(key, value, expiredIn = 1) {
    this.cookieManager.set(key, value, { expires: expiredIn });
  }

  removeItem(key) {
    this.cookieManager.remove(key);
  }

  removeAll() {
    const allCookies = this.cookieManager.get();
    Object.keys(allCookies).forEach((key) => {
      this.cookieManager.remove(key);
    });
  }
}

module.exports = CookieManager;
