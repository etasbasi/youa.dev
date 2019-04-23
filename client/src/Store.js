import axios from "axios";
// FIXME: => Set token to a cookie before deployment
// FIXME: => Remove the proxy before deployment

class StoreClass {
  applyProxy = url => {
    return `http://localhost:8000${url}`;
  };
  register = data => {
    axios
      .post(this.applyProxy("/api/auth/register"), data)
      .then(() => (window.location.href = "/login"))
      .catch(err => console.error(err.response.data));
  };
  login = async data => {
    localStorage.removeItem("token");
    try {
      const res = await axios.post(this.applyProxy("/api/auth/login"), data);
      const { token } = await res.data;
      localStorage.setItem("token", token);
    } catch (err) {
      console.error(err.response.data);
      return;
    } finally {
      try {
        const profileRes = await axios.get(
          this.applyProxy("/api/profile/current"),
          { headers: { Authorization: localStorage.token } }
        );
        const { handle } = await profileRes.data;
        window.location.href = `/profile/${handle}`;
      } catch (err) {
        if (err.response.status === 404) {
          window.location.href = "/create";
        } else {
          window.location.href = "/register";
        }
      }
    }
  };
  getUserProfile = async () => {
    try {
      const response = await axios.get(
        this.applyProxy("/api/profile/current"),
        { headers: { Authorization: localStorage.token } }
      );
      const { data } = await response;
      return data;
    } catch (err) {
      return err;
    }
  };
  getProfile = (handle, callback) => {
    axios
      .get(this.applyProxy(`/api/profile/get/${handle}`))
      .then(res => callback(null, res.data))
      .catch(err => callback(err, null));
  };
  createProfile = data => {
    axios
      .post(this.applyProxy("/api/profile/create"), data, {
        headers: { Authorization: localStorage.token }
      })
      .then(res => (window.location.href = `/profile/${res.data.handle}`))
      .catch(err => console.error(err.response.data));
  };
  getPost = (handle, callback) => {
    axios
      .get(this.applyProxy(`/api/posts/get/${handle}`))
      .then(res => callback(false, res.data))
      .catch(err => callback(err, false));
  };
}

const Store = new StoreClass();
export default Store;
