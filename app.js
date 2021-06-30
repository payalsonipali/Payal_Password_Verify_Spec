exports.check_exception = function(password){
    
    if(password === null)
    throw new Error('password should not be null');

    if(password.length < 8)
    throw new Error('password should be greater than 8 characters');

    if(password === password.toLowerCase())
    throw new Error('password should have atleast one uppercase character');

    if(password === password.toUpperCase()){
        throw new Error('password should have atleast one lowercase character');
    }

    if(!(/\d/.test(password))){
        throw new Error('password should have atleast one digit');
    }
    
}

