<template>
  <div class="wrapper-card">
    <div class="people-images">
      <ul class="peoples">
        <li v-for="i in test" :key="i.name">
          <img :alt="i.name" :src="i.picture" class="picture">
          <p> {{ i.name }}</p>
        </li>
      </ul>
    </div>

    <div class="screen">
      <img alt="" src="src/assets/test.png">
    </div>

  </div>

  <control-panel/>

</template>

<script>
import {defineComponent} from 'vue';
import ControlPanel from "./ControlPanel.vue";

export default defineComponent({
  components: {ControlPanel},
  data: function () {
    return {
      test: [
        {
          name: "Valdemar",
          picture: "src/assets/peoples/p1.jpeg",
          enable: false
        },
        {
          name: "Valdemar",
          picture: "src/assets/peoples/p2.jpg",
          enable: false
        },
        {
          name: "Valdemar",
          picture: "src/assets/peoples/p3.png",
          enable: false
        },
        // {
        //   name: "Valdemar",
        //   picture: "src/assets/peoples/p4.png",
        //   enable: false
        // },
        // {
        //   name: "Valdemar",
        //   picture: "src/assets/peoples/p5.jpeg",
        //   enable: false
        // },
      ]
    }
  },

});
</script>

<style scoped>

* {
  list-style: none;
}

.people-images {
  /*background-color: red;*/
  height: 100%;
  width: 18%;
  background-color: darkslategray;
}

.picture {
  border-radius: 5px;
  margin-left: 15px;
  height: 100px;
  width: 100px;
  border: black 3px solid;
}

.peoples p {
  font-weight: bold;
}

.peoples {
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  width: 180px;
  gap: 50px;

}

.screen {
  background-color: red;
  width: 85%;
  height: 100%;
}

.screen img{
  height: 100%;
  width:  100%;
}

.wrapper-card {
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80%;
}
</style>
