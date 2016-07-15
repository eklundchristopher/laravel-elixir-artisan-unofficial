let shell;

class ArtisanTask extends Elixir.Task {
    /**
     * Create a new JavaScriptTask instance.
     *
     * @param  string  command
     * @param  object|null  options
     * @return void
     */
    constructor (command, options) {
        super('artisan');

        this.command = command || 'list';
        this.options = options || { };
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
    registerWatchers () {
        if (this.options && this.options.watcher) {
            this.watch(this.options.watcher);
        }
    }

    /**
     * Build up the Gulp task.
     */
    gulpTask () {
        var path = this.options.path || Elixir.config.js.artisan.path;

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
