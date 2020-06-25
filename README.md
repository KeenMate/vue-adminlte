# VueJS implementation of AdminLTE

This is VueJS implementation of our condensed, desktop-first oriented [AdminLTE template](/keenmate/AdminLTE). 
We cannot and will not work on this 100% of our time byt ee add new components as we need them in our projects but go ahead and helps if you like this implementation of AdminLTE.

We aim for:
- rapid application development


## Usage

### Install package
```bash
$ npm i @keenmate/vue-adminlte
```

### Include our p11n plugin with setup script
```javascript
// main.js
import Vue from "vue"
import VueAdminLte from "@keenmate/vue-adminlte"
// import code of original (mostly) adminlte project
import "@keenmate/vue-adminlte/src/vue-adminlte-setup"

Vue.use(VueAdminLte)
```
And now you have all components available in your code.

### Main component
Your page should start with this:
```html
<app-container
	:is-loading="isLoading"
	top-nav-color="success"
	no-bars
>
	<template #top-nav>
		<top-nav-link :to="{name: 'route1'}">route1</top-nav-link>
    <top-nav-link :to="{name: 'route2'}">route2</top-nav-link>
    <top-nav-link :to="{name: 'route3'}">route3</top-nav-link>
    <top-nav-link :to="{name: 'route4'}">route4</top-nav-link>
	</template>
	<router-view></router-view>
	<your-footer />
</app-container>
```

With example page:
```html
<!-- @/views/Route1.vue -->
<page>
	<template #header>
		<page-header title="Your page header title" />
	</template>
	<p>Your page content here</p>
</page>
```

Our components use JSDoc way of documenting code. So if you are struggling with some component, try to look into source code for these comments


## Project Development

### Project setup
```
npm install
```

#### For development
```
npm run demo
```
