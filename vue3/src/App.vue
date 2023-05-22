<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import * as myLib from 'lib2'
import { onMounted, ref, toRefs } from 'vue';

const msg = ref("THIS IS VUE 3333a");
const myCar= ref({ make: 'Ford', model: {name:'Fiesta', status: 'going there!'}});

const messageFromChild = ref('');

onMounted(() => {
  console.log('mounted!')
  msg.value = "THIS IS VUE 3xxxxx";
  myCar.value = { make: 'Ford', model: {name:'Fiesta', status: 'going there!'}};
})

const sendText= (event) => {
  messageFromChild.value = event.detail[0].message;
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg="msg" style="border:1px dashed red" />
      <lib-simple-button />
      <lib-complex-button :message="msg" :car.prop="myCar" v-on:send="sendText"/>
      <div style="margin-top:50px">
        <span>Message from child event:</span>
        <span style="border 0.5px dashed brown">{{ messageFromChild }}</span>
      </div>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
