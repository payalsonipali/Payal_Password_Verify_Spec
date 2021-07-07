const birthday = require("./birthday")

const sendEmail = (filepath) => {
  
    console.log(birthday.greetFriend(filepath));
     return birthday.greetFriend(filepath);

}

module.exports = { sendEmail }