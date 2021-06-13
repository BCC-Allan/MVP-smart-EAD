<template>
  <nav-bar></nav-bar>
  <class-container/>
  <game-modal>
    <addition-game></addition-game>
    <operator-game></operator-game>
  </game-modal>
</template>
<script>
import { defineComponent } from 'vue';
import ClassContainer from './components/ClassContainer.vue';
import NavBar from './components/NavBar.vue';
import GameModal from './components/GameModal.vue';
import AdditionGame from './components/AdditionGame.vue';
import OperatorGame from './components/OperatorGame.vue';
export default defineComponent({
  components: {ClassContainer, NavBar, GameModal, AdditionGame, OperatorGame},
});
</script>
