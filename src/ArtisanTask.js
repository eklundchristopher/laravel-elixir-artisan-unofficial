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

        this.command = command;
        this.options = options;
    }

    /**
     * Lazy load the task dependencies.
     */
    loadDependencies () {
        shell = require('gulp-shell');
    }

    /**
     * Build up the Gulp task.
     */
    gulpTask () {
        return (
            gulp
            .src(this.options.path || Elixir.config.js.artisan.path)
            .pipe(
                shell('php ./artisan' + this.command)
            )
        );
    }
}

export default ArtisanTask;
