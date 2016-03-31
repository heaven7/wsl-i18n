Template.language_switcher.onRendered(function() { this.$('.i18n_language_switch select').dropdown() })

Template.language_switcher.events({
    "change .i18n_language_switch select": (e) => {
        var lang = $(e.currentTarget).val()
        WSL.i18n.setLanguage(lang)
    }
})

