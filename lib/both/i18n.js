/**
 * WSL internationalization settings and methods.
 * Delegating language helper functions from raix:handlebar-helpers@0.2.3
 * @namespace WLS.i18n
 * @type {Object}
 */

WSL.i18n = Helpers;

if (Meteor.isClient) {
    Meteor.startup(function () {

        TAPi18n.setLanguage(WSL.i18n.language())
            .done(function () {
                console.log('language set to: ' + WSL.i18n.language());
            })
            .fail(function (error_message) {
                console.log(error_message);
            });
    });
}
