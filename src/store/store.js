import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    appReady: false,
    progressBar: 0,
    overlayIsOpen: false,
    headerIsOpen: true,
    modalIsOpen: false
  },
  getters: {
    _appReady: state => () => state.appReady,
    _overlayIsOpen: state => () => state.overlayIsOpen,
    _progressBar: state => () => state.progressBar,
    _headerIsOpen: state => () => state.headerIsOpen,
    _modalIsOpen: state => () => state.modalIsOpen
  },
  mutations: {
    setAppState(state, value){
      state.appReady = value
    },
    // PROGRESS BAR
    setProgressBar(state, value){
      state.progressBar = value;
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
    }
  }
})
