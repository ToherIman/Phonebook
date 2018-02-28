import './home.html';
import { AccountsTemplates } from 'meteor/useraccounts:core';


Template.home.events({
    'click .js-logout' (ev) {
        ev.preventDefault();
        AccountsTemplates.logout();
    }
});
