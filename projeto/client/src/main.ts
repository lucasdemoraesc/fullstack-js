import { createApp } from 'vue';
import App from './App.vue';
import { AxiosAdapter } from './infra/http/AxiosAdapter';
import BoardServiceHttp from './services/BoardServiceHttp';
import "./style.css";

const app = createApp(App);
const httpClient = new AxiosAdapter();

app.provide("BoardService", new BoardServiceHttp(httpClient, import.meta.env.VITE_API_URL));

app.mount('#app');
