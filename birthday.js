const friendStore = require("./friendStore")

const greetFriend = (filepath) => {
         const friendsList = friendStore.readFriends(filepath);
         var birthdatListOfFriends = [];

         
         for(let itr=0; itr<friendsList.length; itr++){

            var singleFriend = friendsList[itr]
            
            const current_month = new Date().getMonth();
            const current_date = new Date().getDate();

            console.log(current_date);
            if((singleFriend.dateOfBirth.getDate() == current_date) && (singleFriend.dateOfBirth.getMonth() == current_month)){
                birthdatListOfFriends.push(singleFriend.email);
                console.log(birthdatListOfFriends);
               }
         }
         
         return birthdatListOfFriends;

}
module.exports = { greetFriend }