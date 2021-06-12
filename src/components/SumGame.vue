<template>
  <div class="game">
    <h1>Matematica Jogo!</h1>
    <div class="game-body">

      <div class="form-floating">
        <select id="level" class="form-select" @change="changeLevel($event.target.value)">
          <option v-for="level in levels" :value="level">{{ level }}</option>
        </select>
        <label for="level">Selecione o nivel de dificuldade</label>
      </div>

      <div class="options">

        <div class="form-check" v-for="(adition, index) in additions">
          <input
              :id="adition"
              :value="index"
              v-model="userAswer"
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
          >
          <label class="form-check-label" :for="adition">
            {{adition}}
          </label>
        </div>
      </div>
      <button type="button" class="btn btn-dark">Começar!</button>
      <button type="button" class="btn btn-dark">Resultado</button>

    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SumGame',
  data() {
    return {
      levels: [1, 2, 3],
      additions: [
          '10 + 10 = 20',
          '11 + 12 = 23',
          '100 + 100 = 200',
      ],
      actualLevel: 0,
      userAswer: 0
    }
  },
  methods: {
    changeLevel(newLevel) {
      this.actualLevel = newLevel;
      console.log(this.actualLevel)
    },

    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },

    generateNumbers(n) {
      const dezenas = 10 ** n;
      const min = dezenas / 10;
      const number = Math.floor(Math.random()*(dezenas-min+1)+min);
      return [number, number];
    },

    getRight(numeros) {
      return [numeros[0], numeros[1], numeros[0] + numeros[1]]
    }


  }
});
</script>

<style scoped>

button {
  margin: 2px 0;
}

.options {
  border: solid black;
  width: 100%;
  height: 40%;
  flex-grow: 1;
  margin: 20px auto;
}
.game {
  background-color: cornflowerblue;
  /*height: 500px;*/
  max-width: 40%;
  margin: auto;
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
