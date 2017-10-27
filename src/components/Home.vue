<template lang="pug">
  .section
    .container
      .columns
        .column.is-8
        .column.is-4
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      store: this.$store,
    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
  .column
    border: 1px solid white
    background-color: lightgray
    color: white
    margin-top: 10px
</style>
