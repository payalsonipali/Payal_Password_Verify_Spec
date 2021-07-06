const friendStore = require("../friendStore")

const greetFriend = () => {
         friendStore.readFriends();
}
module.exports = { greetFriend }