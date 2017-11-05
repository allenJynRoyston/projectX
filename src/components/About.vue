<template lang="pug">
  .container(style='min-height: 800px')
    .section
      div(v-if='!this.triggered')
        h1 Section has not been viewed yet
        p Please check back later.
      div(v-if='this.triggered')
        h1 GET OUT GET OUT GET OUT GET OUT
</template>

<script>
import shortParagraph1 from "../assets/images/site/short-paragraph.png"

export default {
  name: 'home',
  data () {
    return {
      store: this.$store,
      triggered: false,
      shortParagraph1: shortParagraph1
    }
  },
  mounted(){

    // checxk if this page has been visited before
    this.triggered = this.store.getters._triggers().pages.about

    setTimeout(() => {
      this.store.commit('setPopupMessage', {message: 'About section has been updated', type: 'is-info'})
      this.store.commit('setHaunt', 1)
    }, 1000)
  },
  methods: {

  },
  destroyed(){
    // set commit for trigger status
    this.store.commit('setTriggers', {root: 'pages', type: 'about', value: true})
  }
}
</script>

<style lang="sass" scoped>
  .demo-panel
    padding: 20px
    overflow: hidden
</style>
