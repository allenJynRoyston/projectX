//--------------
__phaser = {

    self: null,
    global:{
      isPaused: false
    },

    //-------------------
    main:{

      //-------------------
      init(el, parent, options){

            //----------------------- assign variables
            var dimensions = {width: options.width, height: options.height}
            var game = new Phaser.Game(dimensions.width, dimensions.height, Phaser.WEBGL, el, { preload: preload, create: create, update: update });
            var filter;
            var pic;
            //-----------------------

            function preload() {
              game.load.image('profilePic', options.image);
            }

            //-----------------------
            function create() {

              //  From http://glslsandbox.com/e#18578.0

              var fragmentSrc = [

                  "precision mediump float;",

                  "uniform float     time;",
                  "uniform vec2      resolution;",
                  "uniform vec2      mouse;",

                  "float noise(vec2 pos) {",
                      "return fract(sin(dot(pos, vec2(12.9898 - time,78.233 + time))) * 43758.5453);",
                  "}",

                  "void main( void ) {",

                      "vec2 normalPos = gl_FragCoord.xy / resolution.xy;",
                      "float pos = (gl_FragCoord.y / resolution.y);",
                      "float mouse_dist = length(vec2((mouse.x - normalPos.x) * (resolution.x / resolution.y) , mouse.y - normalPos.y));",
                      "float distortion = clamp(1.0 - (mouse_dist + 0.1) * 3.0, 0.0, 1.0);",

                      "pos -= (distortion * distortion) * 0.1;",

                      "float c = sin(pos * 400.0) * 0.4 + 0.4;",
                      "c = pow(c, 0.2);",
                      "c *= 0.2;",

                      "float band_pos = fract(time * 0.1) * 3.0 - 1.0;",
                      "c += clamp( (1.0 - abs(band_pos - pos) * 10.0), 0.0, 1.0) * 0.1;",

                      "c += distortion * 0.08;",
                      "// noise",
                      "c += (noise(gl_FragCoord.xy) - 0.5) * (0.09);",


                      "gl_FragColor = vec4( 0.0, c, 0.0, 1.0 );",
                  "}"
              ];

              pic = game.add.sprite(0, 0, 'profilePic');

              filter = new Phaser.Filter(game, null, fragmentSrc);
              filter.setResolution(dimensions.width, dimensions.height);
              pic.filters = [ filter ];

            }
            //-----------------------

            //-----------------------
            function update() {
              if(!__phaser.global.isPaused){
                filter.update();
              }
            }
            //-----------------------

            //-----------------------
            __phaser.self = game;
            parent.game = __phaser;
            //-----------------------
      },
    },
    //-------------------

    //-------------------
    toggle(val){
      __phaser.global.isPaused = !__phaser.global.isPaused
      return __phaser.global.isPaused
    },
    //-------------------

    //-------------------
    pause(val){
      __phaser.global.isPaused = val
      return __phaser.global.isPaused
    },
    //-------------------

    //-------------------
    destroy(){
      __phaser.self.destroy();
      return true
    }
    //-------------------


}
//--------------
