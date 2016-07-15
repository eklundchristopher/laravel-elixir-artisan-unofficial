import ArtisanTask from './ArtisanTask';

/*
 |----------------------------------------------------------------
 | Artisan Command
 |----------------------------------------------------------------
 |
 | This task will allow you to execute specific commands from
 | the artisan executable within your Laravel project - it
 | assumes we begin from within a vendor package folder.
 |
 */

Elixir.config.js.artisan = {
    path: '../../../artisan'
};


Elixir.extend('artisan', function (command, options) {
    new ArtisanTask('artisan', command, options, getPaths(options.watcher));
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string}  watcher
 * @return {GulpPaths|null}
 */
function getPaths (watcher) {
    if (watcher === undefined) {
        return;
    }

    return new Elixir.GulpPaths()
        .src(watcher, Elixir.config.publicPath)
        .output('./');
};
