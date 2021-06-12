<template>
  <div class="wrapper-card">

  </div>
  <control-panel/>

</template>

<script>
import {defineComponent} from 'vue';
import ControlPanel from "./ControlPanel.vue";

export default defineComponent({
  components:{ControlPanel}

});
</script>

<style scoped>

.wrapper-card {
  height: 100%;
  background-color: red;
}
</style>
