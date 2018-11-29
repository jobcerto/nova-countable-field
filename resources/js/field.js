Nova.booting((Vue, router) => {
    Vue.component('index-countable', require('./components/IndexField'));
    Vue.component('detail-countable', require('./components/DetailField'));
})
