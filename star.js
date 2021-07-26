Vue.component('start-rating', {
    template: '#Start-rating',
    props: ['max', 'current'],
    computed: {
        getRating: function(){
            return (this.current / this.max) * 100
        }
    }
})

new Vue({
    el: '#app',
    data: {
        value: 5
    },
    methods: {
        randomValue: function(){
            this.value = (Math.random()*4+1).toFixed(2)
        }
    }
})


var btn = document.querySelector('.btn-Rating'),
    boxContent = document.querySelector('#app');
btn.addEventListener('click', function(){
    boxContent.classList.toggle('d-block');
})