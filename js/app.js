const createApp = Vue.createApp;

createApp ({
    data() {
        return {
            message: 'Questo è il mio primo applicativo Vue',
            image: 'https://picsum.photos/800/600',
            coloursArray : ['green', 'red', 'violet', 'orange', 'brown'],
            colour: '',
            index: 0,
        }
    },
    methods: {
        changeColour: function() {
            this.colour = this.coloursArray[this.index]
            console.log(this.colour)
            this.index++
        }
    }
}).mount('#app')