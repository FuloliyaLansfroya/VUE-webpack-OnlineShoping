import Vue from 'vue';
import App from '@/app.vue';
import router from '@/router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "@/mock/footer.js";

Vue.config.productionTip = false

Vue.use(ElementUI);
new Vue({
    el:"#app",
    router,
    render:(h)=>h(App)
})