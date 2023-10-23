const createApp = Vue.createApp;

createApp ({
    data() {
        return {
            message: 'Questo è il mio primo applicativo Vue',
            src: 'https://picsum.photos/600/800'
        }
    }
}).mount('#app')