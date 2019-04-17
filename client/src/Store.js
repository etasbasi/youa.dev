import API from "./utils/API";
import jwt_decode from "jwt-decode";
import axios from "axios";

// FIXME: => Set token to a cookie before deployment
// FIXME: => Remove the proxy before deployment

class StoreClass {
  constructor() {
    this.warehouse = {
      isLoggedIn: false,
      userProfile: undefined
    };
    this.checkToken = this.checkToken.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
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
    API.post(this.applyProxy("/api/auth/register"), data)
      .then(() => (window.location.href = "/login"))
      .catch(err => console.error(err.response.data));
  }
  login(data) {
    API.post(this.applyProxy("/api/auth/login"), data)
      .then(res => res.data)
      .then(data => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.checkToken();
        window.location.href = "/create";
      })
      .catch(err => console.error(err.response.data));
  }
  async getUserProfile() {
    const response = await API.get(this.applyProxy("/api/profile/current"));
    const { status } = await response;
    if (status === 200) {
      this.warehouse.userProfile = response.data;
      return true;
    } else {
      return false;
    }
  }
  getProfile(handle, callback) {
    axios
      .get(this.applyProxy(`/api/profile/get/${handle}`))
      .then(res => res.data)
      .then(data => {
        if (data) {
          callback(null, data);
        }
      })
      .catch(err => callback(err, null));
  }
  createProfile(data) {
    axios
      .post(this.applyProxy("/api/profile/create"), data)
      .then(res => res.data)
      .then(data => {
        if (data) {
          window.location.href = `/profile/${data.handle}`;
        }
      });
  }
}

const Store = new StoreClass();
export default Store;
