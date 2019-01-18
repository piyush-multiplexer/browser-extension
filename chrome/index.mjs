import {renderParticle} from '../assets/js/animate.mjs'

let app = new Vue({
    el: "#app",
    data: {
        color: '',
        clickEffect: 'grab',
        hoverEffect: 'push',
        effects: ['grab', 'bubble', 'repulse', 'push', 'remove']
    },

    created() {
        let self = this;
        chrome.storage.sync.get(['color'], function (result) {
            if (result) {
                document.querySelector('#particles-js').style.backgroundColor = result.color;
            }
        });
        chrome.storage.sync.get(['clickEffect'], function (result) {
            self.clickEffect = result ? result.clickEffect : 'push';
            chrome.storage.sync.get(['hoverEffect'], function (result) {
                self.hoverEffect = result ? result.hoverEffect : 'grab';
            });
            self.renderPlugin();
        });

    },
    methods: {
        getData: function () {
            document.querySelector('#particles-js').style.backgroundColor = this.color;
            document.querySelector('#message').innerHTML = '<b>Under Construction</b>';
            chrome.storage.sync.set({color: this.color}, function () {
            });
            chrome.storage.sync.set({hoverEffect: this.hoverEffect}, function () {
            });
            chrome.storage.sync.set({clickEffect: this.clickEffect}, function () {
            });
            this.renderPlugin();
        },
        renderPlugin: function () {
            renderParticle(this.clickEffect, this.hoverEffect)
        }
    }
})