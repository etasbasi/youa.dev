import jwt_decode from "jwt-decode";

function isOwner(profileId) {
  if (localStorage.token) {
    const decoded = jwt_decode(localStorage.token);
    if (profileId === decoded.id) {
      return true;
    }
  }
  return false;
}

export default isOwner;
