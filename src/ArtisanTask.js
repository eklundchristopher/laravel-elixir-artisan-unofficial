let shell;

class ArtisanTask extends Elixir.Task {

    /**
     * Create a new JavaScriptTask instance.
     *
     * @param  {string}      name
     * @param  {string}      command
     * @param  {object|null} options
     * @param  {GulpPaths}   paths
     */
    constructor (name, command, options, paths) {
        super(name, null, paths);

        this.command = command || 'list';
        this.options = options || { };

        this.recordStep(this.command);
    }


    /**
     * Lazy load the task dependencies.
     */
    loadDependencies () {
        shell = require('gulp-shell');
    }


    /**
     * Register file watchers.
     */
    registerWatchers() {
        if (this.src === undefined || this.src.path === undefined) {
            return;
        }

        this.recordStep('Registering watcher');
        this.watch(this.src.path);
    }


    /**
     * Build up the Gulp task.
     */
    gulpTask () {
        var path = this.options.path || Elixir.config.js.artisan.path;

        this.recordStep('Executing artisan command');

        return (
            gulp
            .src('')
            .pipe(
                shell('php ' + path + ' ' + this.command)
            )
        );
    }
}

export default ArtisanTask;
