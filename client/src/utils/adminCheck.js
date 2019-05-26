import jwt_decode from "jwt-decode";

const adminCheck = () => {
  let check = false;
  if (localStorage.token) {
    const { token } = localStorage;
    const decoded = jwt_decode(token);
    if (decoded.exp > Date.now() / 1000 && decoded.type === "admin") {
      check = true;
    }
    return check;
  }
};

export default adminCheck;
