let app = new Vue({
    el: "#app",
    data: {
        color: ''
    },
    methods: {
        getData: function () {
            document.querySelector('#message').innerHTML = '<b>Under Construction</b>'
            document.querySelector('#particles-js').style.backgroundColor = this.color
        }
    }
})