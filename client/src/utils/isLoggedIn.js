import logout from "./logout";

export default () => {
  if (localStorage.token) {
    console.log("The user is Logged In");
    return true;
  }
  logout();
  return false;
};
