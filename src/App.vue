<template>


  <card/>


  <main>
    <h1>Smart ead</h1>

  </main>
</template>

<script>
import { defineComponent } from 'vue';
import UserBar from "./components/UserBar.vue";
import Card from "./components/card.vue";

export default defineComponent({
  components: {Card}
});
</script>

<style>

</style>
