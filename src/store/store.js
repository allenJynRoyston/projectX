import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appReady: false,
    progressBar: 0,
    overlayIsOpen: false,
    headerIsOpen: true,
    modalIsOpen: false,
    details: {
      title: 'Game Title',
      sidebar: {
        developer: [
          {title: 'Allen Royston', isLink: true},
          {title: 'Amanda Vivalaqua', isLink: true}
        ],
        publisher: [
          {title: 'X Games', isLink: true}
        ],
        director: [
          {title: 'Allen Royston', isLink: true}
        ],
        artist:  [
          {title: 'Artist Name', isLink: true}
        ],
        writer:  [
          {title: 'Writer Name', isLink: true}
        ],
        composer: [
          {title: 'None', isLink: false}
        ],
        series:  [
          {title: 'None', isLink: false}
        ],
        platforms: [
          {title: 'PC (Flash)', isLink: false},
          {title: 'PC (HTML5)', isLink: false}
        ],
        release:  [
          {title: '11/3/1111', isLink: false}
        ],
        genres:  [
          {title: 'Text adventure', isLink: false}
        ],
        modes:  [
          {title: 'Single-player', isLink: false}
        ]
      }
    },
    haunt: 0,
    glitch: 0,
    popupMessage: [],
    triggers: {
      pages: {
        about: false
      },
    },
  },
  getters: {
    _appReady: state => () => state.appReady,
    _overlayIsOpen: state => () => state.overlayIsOpen,
    _progressBar: state => () => state.progressBar,
    _headerIsOpen: state => () => state.headerIsOpen,
    _modalIsOpen: state => () => state.modalIsOpen,
    _details: state => () => state.details,
    _haunt: state => () => state.haunt,
    _glitch: state => () => state.glitch,
    _popupMessage: state => () => state.popupMessage,
    _triggers: state => () => state.triggers
  },
  mutations: {
    setAppState(state, value){
      state.appReady = value
    },
    // PROGRESS BAR
    setProgressBar(state, value){
      state.progressBar = value;
    },
    setHeader(state, value){
      state.headerIsOpen = value
    },
    // OVERLAY
    overlay_set(state, value){
      state.overlayIsOpen = value;
    },
    overlay_on(state) {
      state.overlayIsOpen = true;
    },
    overlay_off(state) {
      state.overlayIsOpen = false;
    },
    // MODAL
    setModal (state, value) {
      state.modalIsOpen = value
    },
    openModal (state) {
      state.modalIsOpen = true
    },
    closeModal (state) {
      state.modalIsOpen = false
    },
    // SET GAME LEVELS
    setHaunt(state, level) {
      state.haunt = level
    },
    setGlitch(state, level) {
      state.glitch = level
    },
    // POPUPS
    setPopupMessage(state, data) {
      state.popupMessage.push({header: data.header ? data.header : 'The site has been updated', message: data.message, type: data.type})
    },
    clearPopupMessage(state) {
      state.popupMessage.shift()
    },
    // TRIGGERS
    setTriggers(state, data) {
      state.triggers[data.root][data.type] = data.value
    }
  }
})
