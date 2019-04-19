import API from "./utils/API";
import jwt_decode from "jwt-decode";
import axios from "axios";

// FIXME: => Set token to a cookie before deployment
// FIXME: => Remove the proxy before deployment

class StoreClass {
  checkToken = () => {
    if (localStorage.token) {
      const token = jwt_decode(localStorage.token);
      if (token.exp < Date.now() / 1000) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };
  applyProxy = url => {
    return `http://localhost:8000${url}`;
  };
  register = data => {
    API.post(this.applyProxy("/api/auth/register"), data)
      .then(() => (window.location.href = "/login"))
      .catch(err => console.error(err.response.data));
  };
  login = data => {
    localStorage.removeItem("token");
    // FIXME: => Redirection to cached profile handle
    API.post(this.applyProxy("/api/auth/login"), data)
      .then(res => res.data)
      .then(data => {
        const { token } = data;
        localStorage.setItem("token", token);
        this.getUserProfile()
          .then(
            profile =>
              (window.location.href = `/profile/${profile.data.handle}`)
          )
          .catch(err => (window.location.href = "/create"));
      })
      .catch(err => console.error(err.response.data));
  };
  getUserProfile = async () => {
    try {
      const response = await axios.get(
        this.applyProxy("/api/profile/current"),
        { headers: { Authorization: localStorage.token } }
      );
      const { data } = await response;
      return { data };
    } catch (err) {
      return { err };
    }
  };
  getProfile = (handle, callback) => {
    axios
      .get(this.applyProxy(`/api/profile/get/${handle}`))
      .then(res => res.data)
      .then(data => {
        if (data) {
          callback(null, data);
        }
      })
      .catch(err => callback(err, null));
  };
  createProfile = data => {
    API.post(this.applyProxy("/api/profile/create"), data)
      .then(res => res.data)
      .then(data => {
        if (data) {
          console.log(data);
          window.location.href = `/profile/${data.handle}`;
        }
      })
      .catch(err => console.error(err));
  };
}

const Store = new StoreClass();
export default Store;
