const { assert } = require("chai");
const birthday = require('../birthday');
const { sendEmail } = require('../emailService');
const sinon = require("sinon");

describe("send email to friends on their birthday",()=>{

    it("sendEmail should call greetfriend function of birthday service",()=>{
            const fake_readGreetFun = sinon.fake.returns([]);
            sinon.replace(birthday,"greetFriend",fake_readGreetFun);
            const result = sendEmail();
            sinon.restore();
            assert.isArray(result);
    })
    
    it("send email to friends their birthday",()=>{

        const fake_readGreetFun = sinon.fake.returns([]);
        sinon.replace(birthday,"greetFriend",fake_readGreetFun);
        const result = sendEmail();
        assert.isArray(result);

    })
}
)