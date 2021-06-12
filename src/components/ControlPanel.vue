<template>
  <div class="wrapper">
    <div>
      <ul class="bar-items">
        <li v-for="i in test" :key="i.key">
          <button class="button-icon" @click="InvertBool(i)">
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
        }
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

.wrapper {
  background-color: red;
  width: 100%;
  height: 10%;
  bottom: 0;
}

.bar-items {
  padding-top: 0.5rem;
  display: flex;
  gap: 10px;
}

.button-icon{
  height: 50px;
  width:  50px;
}
</style>
