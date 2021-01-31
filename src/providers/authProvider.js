import UserProvider from './userProvider';

let loginRetryCounter = 1;

const AuthProvider = {

   login: function (name, password) {
      const user = new UserProvider().getUser(name);
      if (loginRetryCounter < 3) {
         if (user && user.password === password) {
            loginRetryCounter = 1;
            localStorage.setItem('currentUser', name);
            return true
         } else {
            ++loginRetryCounter;
            return false
         }
      }
      loginRetryCounter = 1;
      throw new Error(`Error`);
   },

   getCurrentUser: function () {
      return new UserProvider().getUser(localStorage.getItem('currentUser'));
   },

   register: function (name, password) {
      new UserProvider().addUser(name, password);
      localStorage.setItem('currentUser', name);
   }
};

export default AuthProvider;