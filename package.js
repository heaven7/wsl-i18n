Package.describe({
  name: 'heaven7:wsl-i18n',
  version: '0.0.1',
  summary: 'I18n package',
  git: 'https://github.com/heaven7/wsl-tasks.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use(['heaven7:wsl-core'], both);
    api.imply(['heaven7:wsl-core']);

    api.use('session', 'client');

    api.addFiles('lib/both/i18n.js', both);
});
