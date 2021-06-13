<template>
  <div class="game">
    <h5 v-if="gameOver && won">Você ganhou!!</h5>
    <h5 v-if="gameOver && !won">Você perdeu, tente novamente!</h5>
    <h5 v-if="operationObj !== null && !gameOver">Qual operador da matematica devemos usar para concertar essa
      conta?</h5>

    <div class="game-body">
      <div v-if="operationObj === null" class=" w-50" style="margin: 0 auto">
        <label for="level">Selecione o nivel de dificuldade</label>
        <select id="level" class="form-select" @change="changeLevel($event.target.value)">
          <option v-for="level in levels" :value="level">{{ level }}</option>
        </select>
      </div>

      <div v-if="operationObj !== null" class="operation">
        <span class="simbol">{{ operationObj.first }}</span>
        <select class="form-select operation-select" @change="changeOperation($event.target.value)">
          <option v-for="operation in operations" :value="operation">{{ operation }}</option>
        </select>
        <span class="simbol">{{ operationObj.second }}</span>
        <span class="simbol">=</span>
        <span class="simbol">{{ operationObj.result }}</span>
      </div>

      <template v-if="operationObj === null">
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
import { Operation } from '../util/Operation';

export default defineComponent({
  name: 'SumGame',
  data() {
    return {
      levels: [1, 2, 3],
      operationObj: null,
      actualLevel: 1,
      gameOver: false,
      won: false,
      operations: ['+', '-', 'X'],
      selectedOperator: '+',
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

    changeOperation(newOperator) {
      this.selectedOperator = newOperator;
    },

    generateNumbers(difficulty) {
      const dezenas = 10 ** difficulty;
      const min = dezenas / 10;
      const number1 = this.randomInt(min, dezenas);
      const number2 = this.randomInt(min, dezenas);
      return {a: number1, b: number2};
    },

    buildRandomOperation(difficulty) {
      const {a, b} = this.generateNumbers(difficulty);
      const operador = this.operations[this.randomInt(0, this.operations.length - 1)];
      return new Operation(a, b, null, operador);
    },

    startGame() {
      this.operationObj = this.buildRandomOperation(this.actualLevel);
    },

    endGame() {
      this.gameOver = true;
      const testOperation = new Operation(
          this.operationObj.first,
          this.operationObj.second,
          this.operationObj.result,
          this.selectedOperator
      );
      this.won = testOperation.isCorrect;
    },

    reestartGame() {
      this.gameOver = false;
      this.operationObj = null;
      this.won = false;
      this.actualLevel = 1;
      this.selectedOperator = '+';
    }
  }
});
</script>

<style scoped>
.simbol {
  align-self: center;
}

.operation-select {
  width: 15%;
}

.sucess {
  color: greenyellow;
}

.error {
  color: red;
}

button {
  margin: 2px 0;
}

.operation {
  border: solid black;
  width: 100%;
  height: 40%;
  flex-grow: 1;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}

.game-body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>
