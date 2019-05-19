module.exports = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
