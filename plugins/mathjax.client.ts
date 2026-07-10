import VueMathjax from 'vue-mathjax-next';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueMathjax);
});