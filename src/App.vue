<template>
  <main>
    <h1>Smart ead</h1>

  </main>
  <control-panel/>


</template>

<script>
import { defineComponent } from 'vue';
import ControlPanel from "./components/ControlPanel.vue";

export default defineComponent({
  components: {ControlPanel}
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
