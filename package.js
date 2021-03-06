Package.describe({
  name: 'heaven7:wsl-i18n',
  version: '0.0.3_4',
  summary: 'I18n package',
  git: 'https://github.com/heaven7/wsl-i18n.git',
  documentation: 'README.md'
})

var both = ['client','server'],
    packages = [
        'heaven7:wsl-translations@0.0.3',
        'tap:i18n@1.7.0',
        'tap:i18n-ui@0.7.0',
        'raix:handlebar-helpers@0.2.5',
        'softwarerero:accounts-t9n@1.2.2',
        'gwendall:autoform-i18n@0.1.9_1',
        'gwendall:simple-schema-i18n@0.2.1',
        'ecmascript',
        'es5-shim',
        'jquery'
    ]

Package.onUse(function(api) {
    api.versionsFrom('1.2')
    api.use(packages, both)
    api.imply(packages)

    api.use('session', 'client')

    api.addFiles('lib/both/i18n.js', both)
    api.addFiles([
        'lib/client/templates.html',
        'lib/client/templates.js'
    ], ['client'])

    api.export('i18n')
})
