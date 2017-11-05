<template lang="pug">
  #message-popup.fixed-popup(v-bind:class='showPopup ? "popup-show" : "popup-hide" ')
    article.message(v-bind:class='popup.type')
      .message-header
        p
          strong {{popup.header}}
        .delete.is-small(@click='clearPopupMessage()')
      .message-body
        p {{popup.message}}
</template>

<script>


export default {
  name: 'popup',
  props: [],
  data () {
    return {
      store: this.$store,
      showPopup: false,
      popup: {},
    }
  },
  mounted(){
    this.store.watch(this.store.getters._popupMessage, val => {
      this.showPopup = true;
      this.popup = val[0];
      // auto clear messages after 5 seconds
      setTimeout(() => {
        if(this.showPopup){
          this.clearPopupMessage()
        }
      }, 5000)
    })
  },
  methods: {
    clearPopupMessage(){
      this.showPopup = false;
      if(this.store.getters._popupMessage().length > 1){
        setTimeout(() => {
          this.store.commit('clearPopupMessage')
        }, 2000)
      }
    }
  }
}
</script>


<style lang="sass" scoped>
  .fixed-popup
    position: fixed
    width: 100%
    padding: 0px 20px 0px 20px

  .popup-show
    bottom: 20px
    opacity: 1
    transition: .5s

  .popup-hide
    bottom: -25px
    opacity: 0
    transition: .5s
</style>
