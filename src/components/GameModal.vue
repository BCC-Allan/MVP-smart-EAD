<template>
  <div id="game-modal" class="modal fade " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <addition-game v-if="currentGame"></addition-game>
          <operator-game v-else></operator-game>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar para a aula</button>
          <button type="button" class="btn btn-secondary" @click="changeGame">Proximo jogo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdditionGame from './AdditionGame.vue';
import OperatorGame from './OperatorGame.vue';
export default {
  name: 'GameModal',
  components: {
    AdditionGame, OperatorGame
  },
  data() {
    return {
      currentGame: true,
      title: "Jogo da soma!"
    }
  },
  methods: {
    changeGame() {
      this.currentGame = !this.currentGame;
    }
  },
  watch: {
    currentGame(newValue) {
      this.title = newValue ? "Jogo da soma!" : "Operações malucas";
    }
  }
}
</script>

<style scoped>

#game-modal {
  color: black;
}

.modal {
  text-align: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
