const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log({salt});
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        console.log({hash});
        // Store hash in your password DB.
    });
});