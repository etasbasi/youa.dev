import jwt_decode from "jwt-decode";

function isProfileOwner(profileId) {
  if (localStorage.token) {
    const decoded = jwt_decode(localStorage.token);
    if (profileId === decoded.id) {
      return true;
    }
  }
  return false;
}

export default isProfileOwner;
