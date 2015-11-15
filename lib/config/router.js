Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'
});

//
// Example pages routes
//

Router.route('/posts', {
    name: 'posts',
    template: 'posts'
});

Router.route('/postSubmit', {
    template: 'postSubmit',
    name: 'postSubmit'
});

Router.route('/', function () {
    Router.go('posts');
});

