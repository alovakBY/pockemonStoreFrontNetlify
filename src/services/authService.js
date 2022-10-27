import api from "../api/config";

class AuthService {
  static instance = new AuthService();

  signIn({ email, password }) {
    const signInData = {
      email,
      password,
    };

    return api.post("/.netlify/functions/server/auth/signIn", signInData);
  }

  signUp(signUpData) {
    console.log(signUpData);
    return api.post("/.netlify/functions/server/auth/signUp", signUpData);
  }

  signOut() {
    localStorage.clear();

    window.location.reload();
  }
}

export default AuthService.instance;
