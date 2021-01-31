export default class UserProvider {

   addUser(name, password) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      if (users.find(user => user.name === name)) {
         throw new Error("User already exists!!!");
      }
      const cv = new Map([
         ["First Name", ''],
         ["Last Name", ''],
         ["Description", ''],
      ]);
      users.push({ name, password, cv });
      localStorage.setItem('users', JSON.stringify(users));
      return true;
   }

   getUser(name) {
      return (JSON.parse(localStorage.getItem('users')) || []).find(user => user.name === name);
   }

   updateUserCv(name, cv) {
      const users = JSON.parse(localStorage.getItem('users'));
      const user = users.find(el => el.name === name);
      user.cv = cv;
      localStorage.setItem('users', JSON.stringify(users));
   }
}
