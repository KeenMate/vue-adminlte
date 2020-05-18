# Installation

## Direct Download / CDN

https://unpkg.com/vue-adminlte/dist/vue-adminlte 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-adminlte@{{ $version }}/dist/vue-adminlte.js
 
Include vue-adminlte after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-adminlte/dist/vue-adminlte.js"></script>
```

## NPM

```sh
$ npm install keenmate@vue-adminlte
```

## Yarn

```sh
$ yarn add keenmate@vue-adminlte
```

When used with a module system, you must explicitly install the `vue-adminlte` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-adminlte from 'vue-adminlte'

Vue.use(vue-adminlte)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-adminlte` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com/keenmate/vue-adminlte.git node_modules/vue-adminlte
$ cd node_modules/vue-adminlte
$ npm install
$ npm run build
```

