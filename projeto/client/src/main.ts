import { createApp } from 'vue';
import App from './App.vue';
import BoardServiceHttp from './services/BoardServiceHttp';
import "./style.css";

const app = createApp(App);
app.provide("BoardService", new BoardServiceHttp());

app.mount('#app');
