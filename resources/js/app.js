require('./bootstrap');

import {createApp} from "vue";

import Home from "./components/Home";

const app = createApp({});

app.component('Home',Home);
app.mount('#app');
