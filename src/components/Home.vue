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
        li.main(v-for='(content, index) in tableOfContents' v-if='content.show')
          span {{index}} &nbsp;
            a(@click='jumpTo(content.title.toLowerCase())')  {{content.title}}
          ul(v-if='content.subContents.length > 0')
            li.sub(v-for='subcontent in content.subContents')
                a  {{subcontent.title}}

    // sections
    section(v-for='(content, index) in tableOfContents' v-bind:id='content.title.toLowerCase()' v-if='content.show')
      h1.subtitle.no-margin
        strong {{content.title}} &nbsp;&nbsp;
        span.edit-text(v-if='content.allowEdit')
          | [
          a edit
          | ]
      hr.no-margin
      br
      div(v-html='getContent(content.title)')

    // debug
    section
      h1.subtitle.no-margin
        strong Debugger &nbsp;&nbsp;
      p Haunt levels ({{haunt}}):
        a(@click='hauntMore()') &nbsp;&nbsp;+&nbsp;&nbsp;
        | /
        a(@click='hauntLess()') &nbsp;&nbsp;-&nbsp;&nbsp;
      p Glitch levels ({{glitch}}):
        a(@click='glitchMore()') &nbsp;&nbsp;+&nbsp;&nbsp;
        | /
        a(@click='glitchLess()') &nbsp;&nbsp;-&nbsp;&nbsp;
</template>

<script>
import gamecontent from '../content.json'

export default {
  name: 'home',
  data () {
    return {
      store: this.$store,
      details: this.$store.getters._details(),
      tableOfContents: [
        {title: 'Gameplay', subContents: [], show: true, allowEdit: true},
        {title: 'Plot', subContents: [
          {title: 'Characters and settings'},
          {title: 'Story'}
        ], show: true, allowEdit: false},
        {title: 'Development', subContents: [
          {title: 'Story and themes'}
        ], show: true, allowEdit: false},
        {title: 'Release', subContents: [], show: true, allowEdit: false},
        {title: 'Reception', subContents: [], show: true, allowEdit: false},
        {title: 'Sequel', subContents: [], show: true, allowEdit: false},
        {title: 'References', subContents: [], show: true, allowEdit: false},
        {title: 'External Links', subContents: [], show: true, allowEdit: false}
      ],
      gamecontent,
      haunt: null,
      glitch: null,
    }
  },
  mounted() {
    this.haunt = this.store.getters._haunt();
    this.glitch = this.store.getters._glitch();
    this.store.watch(this.store.getters._haunt, val => {
      this.haunt = val;
    })
    this.store.watch(this.store.getters._glitch, val => {
      this.glitch = val;
    })
  },

  methods: {
    getContent(section){
      // not ready
      if(this.haunt === null){
        return ''
      }
      // property doesn't exists (error)
      if(this.gamecontent[section.toLowerCase()] === undefined){
        return '<p>No data - error</p>'
      }
      // else load correctl["0"].
      return this.gamecontent[section.toLowerCase()].haunt[this.haunt];
    },
    hauntMore(){
      this.store.commit('setHaunt', (this.store.getters._haunt()) + 1)
    },
    hauntLess(){
      this.store.commit('setHaunt', (this.store.getters._haunt()) - 1)
    },

    glitchMore(){
      this.store.commit('setGlitch', (this.store.getters._glitch()) + 1)
    },
    glitchLess(){
      this.store.commit('setGlitch', (this.store.getters._glitch()) - 1)
    },
    jumpTo(link){
      window.changeSection(link)
    }
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

  .edit-text
    font-size: 12px

  section
    margin-bottom: 25px
</style>
