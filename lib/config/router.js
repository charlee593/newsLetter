Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

//
// Example pages routes
//

Router.route('/posts', function () {
    Router.go('posts');
});


Router.route('/pageOne', {
    name: 'pageOne',
    template: 'pageOne'
});

Router.route('/postSubmit', {
    template: 'postSubmit',
    name: 'postSubmit'
});

Router.route('/groupDetail', function () {
    this.render('groupDetail');
});

Router.route('/', function () {
    Router.go('posts');
});

