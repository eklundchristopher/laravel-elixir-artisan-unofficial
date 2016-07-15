import ArtisanTask from './ArtisanTask';

Elixir.config.js.artisan = {
    path: '../../../artisan'
};

Elixir.extend('artisan', function (command, options) {
    new ArtisanTask(command, options);
});
