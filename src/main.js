import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import ApexCharts from "apexcharts";
import moment from "moment";
import VueMoment from "vue-moment";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router";

moment.locale("zh-tw");
require("moment/locale/zh-tw");
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts, ApexCharts);
Vue.use(VueMoment, {
  moment,
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
