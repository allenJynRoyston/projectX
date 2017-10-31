<template lang="pug">
  .section
    // sidebar
    section#sidebar
      right-sidebar

    // header
    section#header
      h1.title.no-margin
        i {{details.title}}
      hr.no-margin
      small From Gameipedia, the free encyclopedia

    // synposis
    section#synopsis
      p.content
        strong
          i  {{details.title}}&nbsp;
        | is a text adventure game developed by an unknown developer and released on Newgrounds in 2003.  {{details.title}} was met with lukewarm reception by much of its intended audience
        | and as a result was removed from the site shortly thereafter.

    // table of contents
    section#table-of-contents
      p Contents
      ul
        li.main(v-for='(content, index) in tableOfContents')
          span {{index}} &nbsp;
            a  {{content.title}}
          ul(v-if='content.subContents.length > 0')
            li.sub(v-for='subcontent in content.subContents')
                a  {{subcontent.title}}

    section#gameplay
      h1.subtitle.no-margin
        strong Gameplay
      hr.no-margin
      br
      p
        | {{details.title}} is a short game experience, only lasting about 10 minutes and features primarily text.  Most notably was the visceral and gory images that would randomly present themselves during gameplay.
        | {{lorem}}


    section#plot
      h1.subtitle.no-margin
        strong Plot
      hr.no-margin
      br
      p
        | {{details.title}} {{lorem}}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      store: this.$store,
      details: this.$store.getters._details(),
      tableOfContents: [
        {title: 'Gameplay', subContents: []},
        {title: 'Plot', subContents: [
          {title: 'Characters and settings'},
          {title: 'Story'}
        ]},
        {title: 'Development', subContents: [
          {title: 'Story and themes'}
        ]},
        {title: 'Release', subContents: []},
        {title: 'Reception', subContents: []},
        {title: 'Sequel', subContents: []},
        {title: 'References', subContents: []},
        {title: 'External Links', subContents: []}
      ],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      game: null
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
  #sidebar
    width: 300px
    float: right
    padding: 20px

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

  .column-container
    border: 1px solid white
    background-color: lightgray
    color: white
    margin-top: 10px

  .no-margin
    margin: 0px

  .strikeout
    text-decoration: line-through
    color: darkgray

  section
    margin-bottom: 25px
    
</style>
