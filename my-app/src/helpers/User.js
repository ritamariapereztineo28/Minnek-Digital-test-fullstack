class User {
  hasToken() {
    const storedToken = localStorage.getItem("auth_token");
    if (!storedToken) {
      return false;
    } else {
      return storedToken ? true : this.logout();
    }
  }

  loggedIn() {
    return this.hasToken();
  }

  logout() {
    localStorage.removeItem("auth_token");
    window.location = "/login";
  }
}
export default new User();
