import jwt_decode from "jwt-decode";

export default () => {
  const { token } = localStorage;
  if (token) {
    const { type, exp } = jwt_decode(token);
    if (exp > Date.now() / 1000 && type === "admin") return true;
  }
  return false;
};
