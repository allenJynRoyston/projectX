<template lang="pug">
  div
    #overlay(v-bind:class='isActive ? "visible" : "hidden"')
      .loading-container
        .section
          p
            span.fa.fa-spinner.fa-pulse.fa-fw
          br
          progress.progress.is-success(v-bind:value="progress" max="100")

    .modal(v-bind:class='modalIsOpen ? "is-active" : ""')
      .modal-background
      .modal-card
        header.modal-card-head
          p.modal-card-title Modal title
          button.delete(aria-label='close' @click='toggleModal()')
        section.modal-card-body
          h1 Content
        footer.modal-card-foot
          button.button.is-success Save changes
          button.button(@click='toggleModal()') Cancel
</template>

<script>
export default {
  name: 'overlay',
  data() {
    return {
      store: this.$store,
      progress: 0,
      isActive: null,
      modalIsOpen: false
    }
  },
  mounted(){
    // watch for isActive
    this.store.watch(this.store.getters._overlayIsOpen, val => {
      this.isActive = val;
    })
    this.store.watch(this.store.getters._progressBar, val => {
      this.progress = val;
    })
    this.store.watch(this.store.getters._modalIsOpen, val => {
      this.modalIsOpen = val
      if(val){
        $('.modal-card').velocity('stop', true)
        $('.modal-card').velocity({rotateX: "90deg", opacity: 0}, 0)
        $('.modal-card').velocity({rotateX: "0deg", opacity: 1}, 250)
      }
    })
  },
  methods: {
    toggleModal() {
      this.store.commit('setModal', !this.store.getters._modalIsOpen())
    }
  }
}
</script>


<style lang="sass" scoped>
  #overlay
    position: fixed
    width: 100%
    height: 100%
    z-index: 100
    pointer-events: none
    text-align: center
    background-color: rgba(0, 0, 0, .8)
    color: white

  .loading-container
    margin-top: 50px

  .visible
    opacity: 1

  .hidden
    opacity: 0

</style>
