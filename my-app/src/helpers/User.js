class User {
  hasToken() {
    const storedToken = localStorage.getItem("auth_token");
    if (!storedToken) {
      return false;
    } else {
      return storedToken ? true : this.logout();
    }
  }
  
  getToken(){
    return localStorage.getItem('auth_token')
  }

  loggedIn() {
    return this.hasToken();
  }

  logout() {
    localStorage.removeItem("auth_token");
    if (window.location.pathname !== "/login") {
      window.location = "/login";
    }
  }
}
export default new User();
