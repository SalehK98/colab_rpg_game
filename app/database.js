/**
 class Database with crud methods, gets objects and stores them
 * 
 */
class Database {
  /**
   *
   * @param {"monster"|"contracts"|"locations"|"player"|"current"} key
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
      player: this.fetch("player"),
      current: this.fetch("current")
    };
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"|"player"|"current"} key
   * @param {any} instance
   */
  update(key, instance) {
    this.create(key, instance);
  }
  /**
   *
   * @param {"monster"|"contracts"|"locations"|"player"|"current"} key
   */
  delete(key, instance) {
    localStorage.removeItem(key); //TODO: fix
  }
}

const db = new Database()

export default db
// module.exports = db
