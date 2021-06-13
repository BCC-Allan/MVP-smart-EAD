<template>
  <div class="wrapper-card">
    <div class="screen-peoples">
      <div class="people-images">
        <ul class="peoples">
          <li v-for="i in test" :key="i.name">
            <img :alt="i.name" :src="i.picture" class="picture">
            <p> {{ i.name }}</p>
          </li>
        </ul>
      </div>
      <div class="screen">
        <div class="screen-share">
          <img alt="" src="src/assets/test.png">
        </div>
        <div class="teacher">
          <img alt="" src="src/assets/peoples/pt.jpg">

        </div>
      </div>
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

export default defineComponent({
  components: {ControlPanel, UserBar},
  data: function () {
    return {
      test: [
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p1.jpg',
          enable: false
        },
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p2.jpg',
          enable: false
        },
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p3.jpg',
          enable: false
        },
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p4.jpg',
          enable: false
        },
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p5.jpg',
          enable: false
        },
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p6.jpg',
          enable: false
        },


      ]
    }
  },

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

.people-images {
  display: revert;
  position: relative;
  height: 20%;
  width: 100%;
  background-color: var(--secondary-color);

}

.picture {
  border-radius: 5px;
  margin-left: 15px;
  height: 70px;
  width: 70px;
  border: black 3px solid;
}

.peoples p {
  font-weight: bold;
}

.peoples {
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;

}


.screen img {
  height: 100%;
  width: 100%;
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
  height: 50%;
  width: 60%;
  padding-right: 30px;
  margin-left: 30px;

}
</style>
