if(Meteor.isClient) WSL = window && window['WSL'] ? window['WSL'] : {}
if(Meteor.isServer) WSL = WSL || {}

/**
 * WSL internationalization settings and methods.
 * Delegating language helper functions from raix:handlebar-helpers@0.2.3
 * @namespace WLS.i18n
 * @type {Object} WSL.i18n
 */

WSL.i18n = Helpers;

/**
 * current Language
 * @type {string} WSL.i18n.currentLanguage
 */

WSL.i18n.currentLanguage = 'de';

/**
 * Function to set the language
 * @param {string} language
 */

WSL.i18n.setLanguage = function (language) {
    if(language && language !== WSL.i18n.currentLanguage) {
        if(Package['tap:i18n']) {
            TAPi18n.setLanguage(language)
            .done(function () {
                T9n.setLanguage(language);
            })
            .fail(function (error_message) {
                throw new Meteor.Error(error_message);
            });

        }

        WSL.i18n.currentLanguage = language;
    }
};

/**
 * Wrapper for the i18n package
 */

i18n = {};

i18n.t = function (str, options) {
    if(Package['tap:i18n']) {
        if (Meteor.isServer) {
            return TAPi18n.__(str, options, WSL.i18n.currentLanguage || 'de');
        } else {
            return TAPi18n.__(str, options);
        }
    }
};

/**
 * Startup
 */

if (Meteor.isClient) {
    Meteor.startup(function () {
        WSL.i18n.setLanguage(WSL.i18n.language());
    });
}

if(Meteor.isClient) window['WSL']= WSL