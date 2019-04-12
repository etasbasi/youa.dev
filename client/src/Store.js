import axios from "axios";

class StoreClass {
  constructor() {
    this.warehouse = {};
    this.test = this.test.bind(this);
  }
  applyProxy(url) {
    return `http://localhost:8000${url}`;
  }
  test() {
    console.log(this.applyProxy("/api/test"));
  }
}

const Store = new StoreClass();
export default Store;
