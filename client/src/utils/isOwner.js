import jwt_decode from "jwt-decode";

export default profileId => {
  if (localStorage.token) {
    const { id } = jwt_decode(localStorage.token);
    if (profileId === id) return true;
  }
  return false;
};
