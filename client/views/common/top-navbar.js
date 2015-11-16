Template.topNavbar.rendered = function(){
    $('body').addClass('mini-navbar');
};

Template.topNavbar.events({

    // Toggle left navigation
    'click #navbar-minimalize': function(event){

        event.preventDefault();

        // Toggle special class
        $("body").toggleClass("mini-navbar");
    },

    'click #logOut': function(){
    	event.preventDefault();

    	Meteor.logout();
    }

});
