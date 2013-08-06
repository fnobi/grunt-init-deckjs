exports.description = 'deck.js presentation template';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {
    init.process( {}, [
        init.prompt('name'),
        init.prompt('description')
    ], function(err, props) {
        // Files to copy (and process).
        var files = init.filesToCopy(props);

        var pkg = {
            name: props.name,
            description: props.description,
            version: '0.0.0',
            scripts: { },
            engines: {
                node: '>=0.8.0 <0.9.1'
            },
            devDependencies: {
                'grunt': '~0.4.0',
                'grunt-contrib-watch': '~0.1.1',
                'grunt-contrib-compass': '0.4.0',
                'grunt-simple-ejs': '0.1.0',
                'grunt-koko': '0.1.1'
            }
        };

        // Actually copy (and process) files.
        init.copyAndProcess(files, props, {});

        // write package.json
        init.writePackageJSON('package.json', pkg);

        // All done!
        done();
    });
};

