Template.loginRegister.events({
    'submit #register': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        console.log("Form submitted." + emailVar);
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(err){
            console.log(err);
        });
        
    },
    'submit #logIn': function(event) {
        event.preventDefault();
        var emailVar = event.target.logInEmail.value;
        var passwordVar = event.target.logInPassword.value;
        console.log("Form submitted." + emailVar);
        Meteor.loginWithPassword(emailVar, passwordVar, function(err){
            console.log(err);
            $('#modal-form').modal('hide');
        });
        
    }
});