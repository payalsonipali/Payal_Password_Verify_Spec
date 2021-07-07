const friendStore = require("./friendStore")

const greetFriend = (filepath) => {
         const friendsList = friendStore.readFriends(filepath);
         var birthdatListOfFriends = [];


         for(let itr=0; itr<friendsList.length; itr++){

            var singleFriend = friendsList[itr]
            
            get_date_from_friends = singleFriend.dateOfBirth.substr(singleFriend.dateOfBirth.length-5);

            let date = new Date();
            dateString = date.toISOString().slice(0,10);
            currentDate = dateString.substr(dateString.length-5)

            if(get_date_from_friends === currentDate){
                birthdatListOfFriends.push(singleFriend.email);
               }
         }
         
         return birthdatListOfFriends;

}
module.exports = { greetFriend }