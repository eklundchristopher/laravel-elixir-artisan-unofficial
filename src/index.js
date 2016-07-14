import ArtisanTask from './tasks/ArtisanTask';

Elixir.config.js.artisan = {
    path: '../../../artisan'
};

Elixir.extend('artisan', function (command, options) {
    new ArtisanTask(command, options);
});
