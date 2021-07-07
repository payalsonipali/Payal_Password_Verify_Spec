const { assert } = require("chai");
const friendStore = require('../friendStore');
const { greetFriend } = require('../birthday');
const sinon = require("sinon");


describe("birthday Services",()=>{
    it("greetFriends should call readFriend of filestore",()=>{
       
            const fake_readFriends = sinon.fake.returns([]);
            sinon.replace(friendStore,"readFriends",fake_readFriends);
            const result = greetFriend();
            sinon.restore();
            assert.isArray(result);
                    
        });

    it("check birth date matches to current date or not",()=>{
       
        const friend = [
            {
                "firstName": "John",
                "lastName": "Doe",
                "dateOfBirth": "2021-07-07",
                "email": "john.doe@gmail.com"
            },
            {
                "firstName": "Joyh",
                "lastName": "Doe",
                "dateOfBirth": "2022-07-07",
                "email": "john.douue@gmail.com"
            },
            {
                "firstName": "Mary",
                "lastName": "Ann",
               "dateOfBirth": "1995-03-09",
                "email": "mary.ann@foobar.com"
            }
        ];
        
            const fake_readFriends = sinon.fake.returns(friend);
            sinon.replace(friendStore,"readFriends",fake_readFriends);
            const result = greetFriend("./friend.json");
            sinon.restore();
            assert.isArray(result);
                     
        })

    })
