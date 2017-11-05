<template lang="pug">
  #sidebar-contents
    p.text-center {{details.title}}
    center
      img.profile-pic
      box-art.box-offset
      small North American cover art         
    section(v-for="(value, propertyName) in details.sidebar")
      .columns
        .column.is-3
          p.is-capitalized {{propertyName}}
        .column.is-9
          p.is-capitalized.has-text-right(v-for='info in details.sidebar[propertyName]')
            a(v-if='info.isLink') {{info.title}}
            span(v-if='!info.isLink') {{info.title}}
</template>

<script>
export default {
  name: 'rightSidebar',
  data () {
    return {
      store: this.$store,
      details: this.$store.getters._details(),
      game: null
    }
  },
  mounted(){
    console.log(this.details)
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
  #table-of-contents
    border: 1px solid gray
    background-color: lightgray
    color: black
    width: 200px
    padding: 10px
    font-size: 12px

  #table-of-contents p
    font-size: 14px

  #table-of-contents .main
    margin-left: 10px

  #table-of-contents .sub
    list-style-type: disc
    margin-left: 20px


  #sidebar-contents
    border: 1px solid gray
    background-color: lightgray
    color: black
    width: 200px
    padding: 10px
    font-size: 12px
    width: 100%

  .profile-pic
    width: 200px
    height: 200px

  .box-offset
    opacity: 0.5
    margin-top: -205px
</style>
