<template>
  <div class="people-images">
    <ul class="peoples">
      <li v-for="i in test" :key="i.name">
        <img :alt="i.name" :src="i.picture" class="picture">
        <p class="people-name">{{ i.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {defineComponent} from 'vue';

export default defineComponent({
  data: function () {
    return {
      test: [
        {
          name: 'Valdemar',
          picture: 'src/assets/peoples/p1.jpg',
          enable: false
        },
        {
          name: 'Gabriela',
          picture: 'src/assets/peoples/p2.jpg',
          enable: false
        },
        {
          name: 'Julieta',
          picture: 'src/assets/peoples/p3.jpg',
          enable: false
        },
        {
          name: 'Allan',
          picture: 'src/assets/peoples/p4.jpg',
          enable: false
        },
        {
          name: 'Pedro',
          picture: 'src/assets/peoples/p5.jpg',
          enable: false
        },
        {
          name: 'Matheus',
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

.people-images {
  display: revert;
  position: relative;
  height: 20%;
  width: 100%;
  background-color: var(--secondary-color);
  border-bottom: 2px solid var(--darker-color);

}

.picture {
  border-radius: 5px;
  height: 70px;
  width: 70px;
  border: black 2px solid;
  margin: 0 30px;
}

.picture:first-child {
  margin-left: 40px;
}

.peoples p {
  font-weight: bold;
}

.peoples {
  padding-top: 10px;
  display: flex;
  row-gap: 10px;

  flex-direction: row;

}


.screen img {
  height: 100%;
  width: 100%;
}


.people-name {
  margin: 0;
  text-align: center;
}
</style>
