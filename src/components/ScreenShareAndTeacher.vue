<template>
  <div class="screen">
    <div class="screen-share">
      <img alt="" src="src/assets/test.png">
    </div>
    <div class="teacher">
      <img alt="" src="src/assets/peoples/pt.jpg">

    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({

});
</script>
<style scoped>

* {
  list-style: none;
}

.peoples p {
  font-weight: bold;
}


.screen img {
  height: 100%;
  width: 100%;
}

.screen {
  display: flex;
  background-color: var(--primary-color);
  position: relative;
  height: 100%;
  width: 100%;
  padding: 30px 0 30px 30px;
}


.screen-share {
}

.teacher {
  border: rgba(247, 255, 0, 0.5) 2px solid;
  height: 50%;
  width: 60%;
  margin-right: 30px;
  margin-left: 30px;

}
</style>
