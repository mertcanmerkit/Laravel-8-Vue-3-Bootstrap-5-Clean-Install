
# Clean install of vue.js 3 and bootstrap 5 for Laravel 8.

If you see the header as blue and properly as in the photo, bootstrap 5 and vue.js 3 have been successfully installed.

## Why did I do this?

To use bootstrap 5 with vue js 3 in Laravel 8, you need to download it with npm. When you download with npm, you have to define the files manually. I got tired of doing this every time I created a project and I created a clean install project.

## Screenshots

![App Screenshot](https://i.ibb.co/drWmVKR/Ekran-Resmi-2022-01-26-18-26-01.png)


## Run Locally

Clone the project

```bash
git clone https://github.com/mertcanmerkit/Laravel-8-Vue-3-Bootstrap-5-Clean-Install
```

Go to the project directory

In Windows

```bash
copy .env.example .env
```

In Linux/Mac

```bash
cp .env.example .env
```


Install dependencies

```bash
composer install

php artisan key:generate

npm install

npm run dev

```


Start the server

```bash
php artisan serve
```


# Example
## webpack.min.js

```javascript
mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');
```


## sass/app.scss

```javascript
@import '~bootstrap/scss/bootstrap';
```

## js/app.js 

```javascript
import {createApp} from "vue";

import YOUR_APP_COMPONENT_NAME from "./components/YOUR_APP_COMPONENT";

const app = createApp({});

app.component('YOUR_APP_COMPONENT',YOUR_APP_COMPONENT_NAME);
app.mount('#app');
```

## welcome.blade.php

```html
...

<!-- Scripts -->
<script src="{{ asset('js/app.js') }}" defer></script>
<!-- Styles -->
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

...

<div id="app">
        <YOUR_APP_COMPONENT_NAME />
</div>

...
```
## Lessons Learned

I HATE INSTALLATIONS!
