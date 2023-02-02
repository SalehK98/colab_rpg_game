/**
 class Database with crud methods, gets objects and stores them
 * 
 */
class Database {
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   * @param {any} instance
   */
  create(key, instance) {
    localStorage.setItem(key, JSON.stringify(instance));
  }
  fetch(key) {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  get read() {
    return {
      monster: this.fetch("monster"),
      contracts: this.fetch("contracts"),
      locations: this.fetch("locations"),
    };
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   * @param {any} instance
   */
  update(key, instance) {
    this.create(key, instance);
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"} key
   */
  delete(key, instance) {
    localStorage.removeItem(key); //TODO: fix
  }
}

export default db = new Database();
