<template lang="pug">
  section.hero.is-primary
    .hero-body
      .container
        h1.title
          | Vue + Vuex
        h2.subtitle
          | Game Creation Suite
        a.button(@click='toggleModal()')
          | Get Started
</template>

<script>
export default {
  name: 'main-header',
  data () {
    return {
      modalIsOpen: false,
      store: this.$store
    }
  },
  created() {

  },
  methods: {
    toggleModal() {
      this.store.commit('setModal', !this.store.getters._modalIsOpen())
    }
  }
}
</script>


<style lang="sass" scoped>

</style>
