<template lang="pug">
  div    
</template>

<script>
export default {
  name: 'boxArt',
  data () {
    return {
      game: null
    }
  },
  mounted(){
    this.loadGame('profile.js')
  },
  methods: {
    loadGame(fileName){
      // remove old game first
      if(this.game !== null){
        this.game.destroy()
      }
      // load new one
      let js = document.createElement("script");
          js.type = "text/javascript";
          js.src = `src/phaser/${fileName}`;
          document.body.appendChild(js);
          js.onload = (() => {
            __phaser.main.init(this.$el, this, {width: 200, height: 200, image: 'src/assets/game/images/face-200x200.jpg'});
          })
    }
  }
}
</script>

<style lang="sass" scoped>
  #boxart
    width: 200px
    height: 200px
</style>
