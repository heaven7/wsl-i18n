if(Meteor.isClient) WSL = window && window['WSL'] ? window['WSL'] : {}
if(Meteor.isServer) WSL = WSL || {}

/**
 * WSL internationalization settings and methods.
 * Delegating language helper functions from raix:handlebar-helpers
 * @namespace WSL.i18n
 * @type {Object} WSL.i18n
 */
WSL.i18n = Helpers

/**
 * current Language
 * @type {string} WSL.i18n.currentLanguage
 */

WSL.i18n.currentLanguage = 'en'

/**
 * Function to set the language
 * @param {string} language
 */

WSL.i18n.setLanguage = function (language) {
    if(language && language !== WSL.i18n.currentLanguage) {
        if(Package['tap:i18n']) {
            TAPi18n.setLanguage(language)
            .done(function () {
                T9n.setLanguage(language)
                return true
            })
            .fail(function (error_message) {
                throw new Meteor.Error(error_message)
            })
        }
        WSL.i18n.currentLanguage = language
    }
}

Meteor.startup(() => {
    if (Meteor.isClient) {
        window['WSL']['i18n'] = WSL.i18n
        WSL.i18n.setLanguage(WSL.i18n.currentLanguage)
    }
})

/**
 * Wrapper for the i18n package
 */

i18n = {}

i18n.t = (str, options) => {
    if (Meteor.isServer) return TAPi18n.__(str, options, WSL.i18n.currentLanguage || 'de')
    else return TAPi18n.__(str, options, TAPi18n.getLanguage())
}

