/**
 * Created by ArvinChen9539 on 2017/11/1.
 */
import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import NProgress from 'vue-nprogress'
import Routers from './components/router/'

import './components/main.css';
import App from "./app.vue";

//开启debug模式
Vue.config.debug = true;

Vue.use(VueAxios, Axios)

Vue.use(NProgress)


const app = new Vue({
    el:"#app",
    router:Routers,
    render: h => h(App)
});

export { app }

