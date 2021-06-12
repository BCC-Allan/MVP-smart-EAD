<template>
  <div class="wrapper-control-panel">
    <div>
      <ul class="bar-items">
        <li class="li-item" v-for="i in test" :key="i.key">
          <button class="btn btn-light button-icon" @click="InvertBool(i)">
            <img v-if="i.enable" alt="" :src="i.on">
            <img v-else alt="" :src="i.off">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  data: function () {
    return {
      test: [
        {
          key: "mic",
          on: "src/assets/mic-on.svg",
          off: "src/assets/mic-off.svg",
          enable: true
        },
        {
          key: "cam",
          on: "src/assets/cam-on.svg",
          off: "src/assets/cam-off.svg",
          enable: true
        },
        {
          key: "screen",
          on: "src/assets/screen-on.svg",
          off: "src/assets/screen-off.svg",
          enable: true
        },
        {
          key: "settings",
          on: "src/assets/settings.svg",
          off: "src/assets/settings.svg",
          enable: true
        },
      ]
    }
  },
  methods:{
    InvertBool(actual){
      actual.enable = !actual.enable
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
  background-color: lightslategray;
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
