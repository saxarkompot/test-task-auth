import UserProvider from './userProvider';

let loginRetryCounter = 0;
let blockTime = new Date();

const AuthProvider = {

   login: function (name, password) {
      const user = new UserProvider().getUser(name);
      if (loginRetryCounter !== 3 || (Date.now() - blockTime) > 60000) {
         if (loginRetryCounter === 3) {
            loginRetryCounter = 0;
         }
         if (user && user.password === password) {
            loginRetryCounter = 0;
            localStorage.setItem('currentUser', name);
            return true
         } else {
            loginRetryCounter++;
            if (loginRetryCounter === 3) {
               blockTime = Date.now();
            }
            return false
         }
      }
      throw new Error('You exceeded number of retries. Try again in one minute')
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