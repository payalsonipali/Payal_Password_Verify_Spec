const { assert } = require("chai");
const friendStore = require('../friendStore');
const { greetFriend } = require('../birthday');
const sinon = require("sinon");


describe("birthday Services",()=>{
        it("greetFriends should call readFriend of filestore",()=>{
       
            const fake_readFriends = sinon.fake.returns([]);
            sinon.replace(friendStore,"readFriends",fake_readFriends);
            const result = greetFriend();
            assert.isTrue(fake_readFriends.calledOnce);           
        })
    })
