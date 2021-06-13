<template>
  <div class="wrapper-card">
    <div class="screen-peoples">
      <Peoples/>
      <ScreenShareAndTeacher/>
    </div>
    <div class="user-bar">
      <UserBar></UserBar>
    </div>
  </div>
  <control-panel/>
</template>

<script>
import {defineComponent} from 'vue';
import ControlPanel from './ControlPanel.vue';
import UserBar from './UserBar.vue'
import Peoples from "./Peoples.vue";
import ScreenShareAndTeacher from "./ScreenShareAndTeacher.vue";

export default defineComponent({
  components: {ScreenShareAndTeacher, Peoples, ControlPanel, UserBar},

});
</script>

<style scoped>

* {
  list-style: none;
}

.user-bar {
  align-self: flex-end;
  height: 100%;
  width: 40%;
}


.wrapper-card {
  background-color: var(--primary-color);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80%;
  max-height: 100vh;
}

.screen-peoples {
  display: flex;
  flex-direction: column;
  width: 80%;

}


</style>
