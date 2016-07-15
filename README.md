# Usage

## Step 1: Install

```
npm install laravel-elixir-artisan-unofficial
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-artisan-unofficial');

elixir.config.js.artisan.path = './artisan';

elixir(function(mix) {
    mix.artisan('vendor:publish --tag=public --force');
});
```

### Step 3: Configure

By default, we assume that you're calling this from within a `vendor/` package. But if your artisan executable is found elsewhere, you may change the path as you see fit.

```js
elixir.config.js.artisan.path = './artisan';
```
