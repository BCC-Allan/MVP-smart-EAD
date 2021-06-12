<template>


  <card/>


</template>

<script>
import { defineComponent } from 'vue';
import Card from "./components/card.vue";

export default defineComponent({
  components: {Card}
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
