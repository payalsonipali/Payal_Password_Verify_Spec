const asserts = require('chai').assert;
const app = require('../app');

describe('App',function(){
    it('password should not be null',()=>
        asserts.throws(()=>app.check_exception(null),'password should not be null'));
   

    it('password should be greater than 8 characters',()=>
        asserts.throws(()=>app.check_exception("hello"),'password should be greater than 8 characters'));
    

    it("password should have atleast one uppercase character",()=>
        asserts.throws(()=>app.check_exception("fofskdvdvd"),'password should have atleast one uppercase character'));
    
    it("password should have atleast one lowercase character",()=>
        asserts.throws(()=>app.check_exception("DFGHYUJ5KIL"),"password should have atleast one lowercase character"));
    
    it('password should have atleast one digit',()=>
         asserts.throws(()=>app.check_exception("dcsojdfLofk",'password should have atleast one digit')));
        })
