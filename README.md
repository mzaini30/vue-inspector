# Vue Inspector Agnostic

## Why I create this?

I like [Vue Inspector for Vite](https://github.com/webfansplz/vite-plugin-vue-inspector). However, I'm currently working on a Chrome extension called [Automa](https://github.com/AutomaApp/automa) that uses Webpack as its bundler. So, I can't use it. So, I created this package that can be used for any bundler.

## How to use it?

Install:

```bash
npm i vue-inspector-agnostic
```

Place it in `main.js` like this:

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import inspector from 'vue-inspector-agnostic'

createApp(App)
  .use(inspector)
  .mount('#app');
```

## How to run Inspector?

Press `meta` and `/` (Mac)	
or `Windows` and `/` (Windows or Linux)

## Screenshot

<p align='center'>
	<img src='https://github.com/mzaini30/vue-inspector/blob/HEAD/ss.png?raw=true'/>
</p>