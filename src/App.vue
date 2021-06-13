<template>
  <nav-bar></nav-bar>
  <ClassContainer/>
</template>
<script>
import { defineComponent } from 'vue';
import ClassContainer from './components/ClassContainer.vue';
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {ClassContainer, NavBar}
});
</script>
