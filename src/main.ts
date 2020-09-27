import { createApp } from 'vue';
import Root from './App.vue';
import router from './router';
import store from './store';
import './assets/css/initialize.css';
import components from './components/components';
const app = createApp(Root);
app.use(router);
app.use(store);
app.use(components);
app.mount('#app');

export default app;
