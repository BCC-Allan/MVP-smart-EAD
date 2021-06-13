<template>
  <div class="game">
    <h5 v-if="gameOver && won">Você ganhou!!</h5>
    <h5 v-if="gameOver && !won">Você perdeu, tente novamente!</h5>

    <div class="game-body">
      <div v-if="additions.length === 0" class=" w-50" style="margin: 0 auto">
        <label for="level">Selecione o nivel de dificuldade</label>
        <select id="level" class="form-select" @change="changeLevel($event.target.value)">
          <option v-for="level in levels" :value="level">{{ level }}</option>
        </select>
      </div>

      <div class="additions">
        <div class="form-check" v-for="(adition, index) in additions">
          <input
              :id="index"
              :value="adition"
              v-model="selectedAswer"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
          >
          <label
              :class="{error: gameOver && !adition.isCorrect, sucess: gameOver && adition.isCorrect}"
              class="form-check-label"
              :for="index">
            {{ adition.toString() }}
          </label>
        </div>
      </div>

      <template v-if="additions.length === 0">
        <button type="button" class="btn btn-dark" @click="startGame">Começar!</button>
      </template>
      <template v-else-if="!gameOver">
        <button type="button" class="btn btn-dark" @click="endGame">Resultado</button>
      </template>

      <template v-if="gameOver">
        <button type="button" class="btn btn-dark" @click="reestartGame">Tentar Novamente</button>
      </template>
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue';
import { GameAdittion } from '../util/GameAdittion';

export default defineComponent({
  name: 'SumGame',
  data() {
    return {
      levels: [1, 2, 3],
      additions: [],
      maxAdditions: 3,
      actualLevel: 1,
      selectedAswer: 0,
      gameOver: false,
      won: false
    }
  },
  methods: {
    randomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    changeLevel(newLevel) {
      this.actualLevel = parseInt(newLevel);
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },

    generateNumbers(difficulty) {
      const dezenas = 10 ** difficulty;
      const min = dezenas / 10;
      const number1 = this.randomInt(min, dezenas);
      const number2 = this.randomInt(min, dezenas);
      return {a: number1, b: number2};
    },

    buildRightAswer({a, b}) {
      return new GameAdittion(a, b, a + b);
    },

    buildWrongAswer({a, b}) {
      const aswer = a + b + this.randomInt(1, b);
      return new GameAdittion(a, b, aswer);
    },

    buildRandomAdditions(difficulty) {
      let additions = [];
      for (let i = 0; i < this.maxAdditions - 1; i++) {
        additions.push(this.buildWrongAswer(this.generateNumbers(difficulty)))
      }
      additions.push(this.buildRightAswer(this.generateNumbers(difficulty)))

      return this.shuffleArray(additions);
    },

    startGame() {
      this.additions = this.buildRandomAdditions(this.actualLevel);
    },

    endGame() {
      this.gameOver = true;
      this.won = this.selectedAswer.isCorrect;
    },

    reestartGame() {
      this.gameOver = false;
      this.additions = [];
      this.won = false;
    }
  }
});
</script>

<style scoped>

.sucess {
  color: greenyellow;
}

.error {
  color: red;
}

button {
  margin: 2px 0;
}

.additions {
  border: solid black;
  width: 100%;
  height: 40%;
  flex-grow: 1;
  margin: 20px auto;
}

.game {
  width: 100%;
  margin: 0;
  padding: 5px;
  color: black;
  max-height: 500px;
}

.game-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
