import logout from "./logout";

export default () => {
  if (localStorage.token) return true;
  logout();
  return false;
};
