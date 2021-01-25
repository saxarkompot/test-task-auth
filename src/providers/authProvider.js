import UserProvider from './userProvider';

let loginRetryCounter = 1;
let blockTime = new Date();
// let errorTiming = (e) => {
//    let interval = setInterval(() => {
//       return e++;
//    }, 1000);
//    setTimeout(() => {
//       clearInterval(interval);
//    }, 30000);
// };
const AuthProvider = {

   login: function (name, password, errorMessage) {
      const user = new UserProvider().getUser(name);
      if (loginRetryCounter !== 3 || (Date.now() - blockTime) > 60000) {
         if (loginRetryCounter === 3) {
            loginRetryCounter = 0;
         }
         if (user && user.password === password) {
            loginRetryCounter = 1;
            localStorage.setItem('currentUser', name);
            return true
         } else {
            ++loginRetryCounter;
            if (loginRetryCounter === 3) {
               blockTime = Date.now();
            }
            return false
         }
      }
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