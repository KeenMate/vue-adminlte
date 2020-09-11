# VueJS implementation of AdminLTE

This is VueJS implementation of our condensed, desktop-first oriented [AdminLTE template](/keenmate/AdminLTE).
We cannot and will not work on this 100% of our time byt ee add new components as we need them in our projects but go ahead and helps if you like this implementation of AdminLTE.

We aim for:

- rapid application development

## Usage

### Install package

```sh
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

### Changes of index.html

This includes adding `Fira` font and font-awesome icons (note that versions may vary) and jquery

```diff
diff --git a/public/index.html b/public/index.html
index 4123528..1a60926 100644
--- a/public/index.html
+++ b/public/index.html
@@ -6,12 +6,25 @@
     <meta name="viewport" content="width=device-width,initial-scale=1.0">
     <link rel="icon" href="<%= BASE_URL %>favicon.ico">
     <title><%= htmlWebpackPlugin.options.title %></title>
+    <link
+      href="https://fonts.googleapis.com/css?family=Cuprum|Fira+Sans+Condensed|Manrope|Martel|Maven+Pro|Monda|Play|Signika|Yanone+Kaffeesatz:300,400,400i,700&display=swap"
+      rel="stylesheet"
+    />
+    <link
+      rel="stylesheet"
+      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
+    />
   </head>
   <body>
     <noscript>
       <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
     </noscript>
     <div id="app"></div>
+    <script
+      src="https://code.jquery.com/jquery-3.5.1.min.js"
+      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
+      crossorigin="anonymous"
+    ></script>
     <!-- built files will be auto injected -->
   </body>
 </html>
```

### Main component

Your page should start with this:

```html
<app-container :is-loading="isLoading" top-nav-color="success" no-bars>
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
