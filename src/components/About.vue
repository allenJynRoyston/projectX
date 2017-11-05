<template lang="pug">
  .container(style='min-height: 800px')
    .section
      div(v-if='!this.triggered.active')
        h1 Section has not been viewed yet
        p Please check back later.
      div(v-if='this.triggered.active')
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
    this.triggered = this.store.getters._triggers().about

    // reset and lock trigger
    if(this.triggered.active && !this.triggered.hasTriggeredBefore){
      this.store.commit('resetAndLockTrigger', 'about')
    }
  },
  methods: {

  },
  destroyed(){
    // only trigger this event once
    if(!this.triggered.active && !this.triggered.hasTriggeredBefore){
      setTimeout(() => {
        this.store.commit('setPopupMessage', {message: 'About section has been updated', type: 'is-info'})
        this.store.commit('setHaunt', 1)
        this.store.commit('setTriggers', {location: 'about', payload: {active: true, hasTriggeredBefore: false}})
      }, 1000)
    }
  }
}
</script>

<style lang="sass" scoped>
  .demo-panel
    padding: 20px
    overflow: hidden
</style>
