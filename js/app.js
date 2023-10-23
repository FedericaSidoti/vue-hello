const createApp = Vue.createApp;

createApp ({
    data() {
        return {
            message: 'Questo è il mio primo applicativo Vue',
            image: 'https://picsum.photos/600/800',
            colour: 'green'
        }
    }
}).mount('#app')