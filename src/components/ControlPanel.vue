<template>
  <div class="wrapper-control-panel">
    <div>
      <ul class="bar-items">
        <li class="li-item">
          <button class="btn btn-light button-icon" @click="micEnabled = !micEnabled">
            <img v-if="micEnabled" alt="" src="src/assets/mic-on.svg">
            <img v-else alt="" src="src/assets/mic-off.svg">
          </button>
        </li>
        <li class="li-item">
          <button class="btn btn-light button-icon" @click="camEnabled = !camEnabled">
            <img v-if="camEnabled" alt="" src="src/assets/cam-on.svg">
            <img v-else alt="" src="src/assets/cam-off.svg">
          </button>
        </li>
        <li class="li-item">
          <button class="btn btn-light button-icon" @click="screenEnabled = !screenEnabled">
            <img v-if="screenEnabled" alt="" src="src/assets/screen-on.svg">
            <img v-else alt="" src="src/assets/screen-off.svg">
          </button>
        </li>
        <li class="li-item">
          <button class="btn btn-light button-icon" @click="openGameModal">
            <img src="src/assets/joy.svg" alt="">
          </button>
        </li>
        <li class="li-item">
          <button class="btn btn-light button-icon" @click="settingsEnabled = !settingsEnabled">
            <img v-if="settingsEnabled" alt="" src="src/assets/settings.svg">
            <img v-else alt="" src="src/assets/settings.svg">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import { Modal } from 'bootstrap';

export default defineComponent({
  data() {
    return {
      micEnabled: true,
      camEnabled: true,
      screenEnabled: true,
      settingsEnabled: true,
    }
  },
  methods:{
    openGameModal() {
      const myModal = new Modal(document.getElementById('game-modal'));
      myModal.show();
    }
  }

});
</script>

<style scoped>
* {
  list-style: none;
  box-sizing: border-box;
}

.wrapper-control-panel {
  background-color: var(--darker-color);
  width: 100%;
  height: 10%;
  bottom: 0;
}

.bar-items {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
}

.li-item:last-child{
  margin-left: auto;
  padding-right: 20px;
}

.button-icon{
  background-color: #babaca;
  height: 50px;
  width:  50px;
}

button:hover {
  background-color: gray;
}
</style>
