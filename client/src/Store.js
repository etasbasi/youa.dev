import axios from "axios";
import jwt_decode from "jwt-decode";

// FIXME: Set token to a cookie before deployment
// FIXME: Remove the proxy before deployment

class StoreClass {
  constructor() {
    this.warehouse = {
      isLoggedIn: false
    };
    this.checkToken = this.checkToken.bind(this);
  }
  checkToken() {
    if (localStorage.token) {
      const token = jwt_decode(localStorage.token);
      if (token.exp < Date.now() / 1000) {
        this.warehouse.isLoggedIn = false;
        return false;
      } else {
        this.warehouse.isLoggedIn = true;
        return true;
      }
    } else {
      return false;
    }
  }
  applyProxy(url) {
    return `http://localhost:8000${url}`;
  }
  register(data) {
    axios
      .post(this.applyProxy("/api/auth/register"), data)
      .then(() => (window.location.href = "/login"))
      .catch(err => console.error(err.response.data));
  }
  login(data) {
    axios
      .post(this.applyProxy("/api/auth/login"), data)
      .then(res => res.data)
      .then(data => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.checkToken();
      })
      .catch(err => console.error(err.response.data));
  }
}

const Store = new StoreClass();
export default Store;
