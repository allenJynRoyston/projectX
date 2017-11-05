<template lang='pug'>
  #app-layout
    overlay
    #site(v-bind:class='applyBlur ? "blur-fx" : ""')
      main-header
      navigation
      router-view
      main-footer
    popup
</template>

<script>
import './assets/js/global.js'

import test_image from "./assets/images/misc/ninja-icon.png"

export default {
  name: 'app',
  data() {
    return {
      store: this.$store,
      showPopup: false,
      popup: {},
      applyBlur: this.$store.getters._modalIsOpen(),
      images: [
        test_image
      ]
    }
  },
  mounted(){
    this.imageLoader(this.images, this.finishedLoading)

    this.store.watch(this.store.getters._overlayIsOpen, val => {
      this.applyBlur = val
    })

    this.store.watch(this.store.getters._modalIsOpen, val => {
      this.applyBlur = val
    })
  },
  methods:{
    imageLoader(Images, Callback){
        this.store.commit('overlay_on')
        let store = this.store;
        let allLoaded = 0;
        let _log = {
            success: [],
            error: []
        };
        let verifier = function(){
            allLoaded++;
            if(allLoaded == Images.length){
              store.commit('setProgressBar', 100);
              Callback.call(undefined, _log);
            }
        };
        for (let index = 0; index < Images.length; index++) {
            (function(i){
                let imgSource = Images[i];
                let img = new Image();
                img.addEventListener("load", function(){
                    store.commit('setProgressBar', (index/Images.length * 100).toFixed(0));
                    _log.success.push(imgSource);
                    verifier();
                }, false);
                img.addEventListener("error", function(){
                    _log.error.push(imgSource);
                    verifier();
                }, false);
                img.src = imgSource;
            })(index);
        }
    },
    finishedLoading(res){
      // toggle off overlay
      this.store.commit('setAppState', true)
      this.store.commit('overlay_off')
    }
  }
}
</script>

<style lang="scss">
  @import './assets/css/global.css';
</style>

<style lang="sass" scoped>
  .blur-fx
    -webkit-filter: blur(4px)
    -moz-filter: blur(4px)
    filter: blur(4px) grayscale(80%)
</style>
