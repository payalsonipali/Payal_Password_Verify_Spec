const { assert } = require("chai");
const { readFriends } = require("../friendStore");
const sinon = require("sinon");
const fs = require("fs");


const friend = [
    {
        "firstName": "John",
        "lastName": "Doe",
    "dateOfBirth": 1997/10/19,
        "email": "john.doe@gmail.com"
    },
    {
        "firstName": "Mary",
        "lastName": "Ann",
    "dateOfBirth": 1995/03/09,
        "email": "mary.ann@foobar.com"
    }
];

describe("friend store",()=>{
     describe("read friends", ()=>{
       it("throw exception if file path is missing",()=>{
           assert.throws(()=>readFriends(),"file path is missing");
       });

       it("return friend list from file", ()=>{
       
    
           const fake_readFileSync = sinon.fake.returns(friend);
           sinon.replace(fs,"readFileSync",fake_readFileSync);
           const result = readFriends("./friend.json");
           assert.isArray(result);
           assert.equal(result.length,friend.length);
       });

     
      })
    })