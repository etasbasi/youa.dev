export default () => {
  if (localStorage.token) return true;
  return false;
};
