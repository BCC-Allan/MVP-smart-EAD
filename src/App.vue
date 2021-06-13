<template>
  <nav-bar></nav-bar>
  <class-container/>
  <game-modal title="Jogo da soma!">
<!--    <addition-game></addition-game>-->
    <operator-game></operator-game>
  </game-modal>
</template>
<script>
import { defineComponent } from 'vue';
import ClassContainer from './components/ClassContainer.vue';
import NavBar from './components/NavBar.vue';
import GameModal from './components/GameModal.vue';
import {Modal} from 'bootstrap';
import AdditionGame from './components/AdditionGame.vue';
import OperatorGame from './components/OperatorGame.vue';
export default defineComponent({
  components: {ClassContainer, NavBar, GameModal, AdditionGame, OperatorGame},
  mounted() {
    const myModal = new Modal(document.getElementById('game-modal'));
    myModal.show();
  }
});
</script>
