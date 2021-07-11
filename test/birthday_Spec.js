const { assert } = require("chai");
const friendStore = require('../friendStore');
const { greetFriend } = require('../birthday');
const sinon = require("sinon");
const { sendMail } = require('../emailService');
const nodemailer = require("nodemailer");



describe("birthday Services",()=>{
    it("greetFriends should call readFriend of filestore",()=>{
       
            const fake_readFriends = sinon.fake.returns([]);
            sinon.replace(friendStore,"readFriends",fake_readFriends);
            const result = greetFriend();
            sinon.restore();
            assert.isTrue(fake_readFriends.calledOnce);
                    
        });

    it("check birth date matches to current date or not",()=>{
       
        const current_date = new Date().getDate();
        const current_month = new Date().getMonth();

        const friend = [
            {
                "firstName": "payal",
                "lastName": "soni",
                "dateOfBirth": new Date(1999,current_month,current_date),
                "email": "pihu.doe@gmail.com"
            },
            {
                "firstName": "pihu",
                "lastName": "soni",
                "dateOfBirth": new Date(2000,current_month,"21"),
                "email": "payal.douue@gmail.com"
            },
         ];
        
            const fake_readFriends = sinon.fake.returns(friend);
            sinon.replace(friendStore,"readFriends",fake_readFriends);
            greetFriend("./friend.json");
            sinon.restore();
                     
        })

     it("send email to friends on their birthday",()=>{

            const fake_sendmail = sinon.fake();
            const fake_nodemailer = sinon.fake.returns({
                sendMail : fake_sendmail,
            });
            sinon.replace(nodemailer,"createTransport",fake_nodemailer);
    
            const PassInfo = {
                from: "purnimasoni2004@gmail.com", // sender address
                to: "purnimasoni2004@gmail.com", // list of receivers
                subject: "Happy Birthday", // Subject line
                text: "happy birthday dear!", // plain text body
                html: "<b>happy birthday dear</b>", // html body
              }
    
            sendMail(PassInfo);
            assert.isTrue(fake_nodemailer.calledOnce);
            assert.isTrue(fake_sendmail.calledOnce);
    
        })

    })
