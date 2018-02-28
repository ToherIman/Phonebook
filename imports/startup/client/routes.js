import '../../ui/pages/home/home.js';
import '../../ui/pages/signin/signin.js';


if (!Meteor.loggingIn()) {
    Router.go('/signIn'); 
} else {
    Router.go('/');
}

Router.route('/signIn', function() {
    this.render('Login');
});

Router.route('/', function () {
    this.render('home');
});

Accounts.onLogin(function () {
   Router.go('/');
});

Accounts.onLogout(function () {
    Router.go('/singIn');
 });