export default () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
