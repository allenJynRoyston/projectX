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
  async mounted(){
    // dependences
    await this.loadFile('src/assets/three/lib/dat.gui.min.js')
    await this.loadFile('src/assets/three/lib/stats.min.js')

    // load shaders
    await this.loadFile('src/assets/three/shaders/CopyShader.js')
    await this.loadFile('src/assets/three/shaders/FilmShader.js')
    await this.loadFile('src/assets/three/shaders/RGBShiftShader.js')
    await this.loadFile('src/assets/three/shaders/BadTVShader.js')
    await this.loadFile('src/assets/three/shaders/StaticShader.js')

    // load postprocessing
    await this.loadFile('src/assets/three/postprocessing/EffectComposer.js')
    await this.loadFile('src/assets/three/postprocessing/RenderPass.js')
    await this.loadFile('src/assets/three/postprocessing/ShaderPass.js')
    await this.loadFile('src/assets/three/postprocessing/MaskPass.js')

    // load threeFile
    await this.loadThree('badtv.js')
  },
  methods: {
    async loadFile(fileName){
      let js = document.createElement("script");
          js.type = "text/javascript";
          js.src = `${fileName}`;
          document.body.appendChild(js);
          let res = await js.onload
    },
    loadThree(fileName){
      // remove old game first
      if(this.game !== null){
        this.game.destroy()
      }
      // load new one
      let js = document.createElement("script");
          js.type = "text/javascript";
          js.src = `src/threeJS/${fileName}`;
          document.body.appendChild(js);
          js.onload = (() => {
            console.log(`${fileName} loaded.`)
            __three.main.init(this.$el, this, {width: 200, height: 200, video: 'src/assets/three/video/hands.mp4'});
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
