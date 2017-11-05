<template lang="pug">
  section.hero.is-primary
    .hero-body
      .container
        .columns
          .column.is-one-quarter
            img(v-bind:src='gameArt')
          .column
            h1.title(v-if='this.details !== null')
              | {{details.title}} Wiki
            a.button(@click='toggleModal()')
              | Get Started
</template>

<script>
import gameArt from "../assets/images/site/placeholder.png"

export default {
  name: 'main-header',
  data () {
    return {
      modalIsOpen: false,
      store: this.$store,
      details: null,
      gameArt: gameArt
    }
  },
  mounted() {
    this.details = this.store.getters._details();
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
