<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import * as myLib from 'lib2'

const msg = "THIS IS VUE 2222";
const myCar = { make: 'Ford', model: 'Mondeo' };

export default {
      components: {
        HelloWorld,
        TheWelcome,
        libSimpleButton: myLib.SimpleButton,
        libComplexButton: myLib.ComplexButton,
      },
      name: 'app',
      data() {
        return {
          msg : "THIS IS VUE 2222",
          myCar : { make: 'Ford', model: { name:'Mondeo'  , status: 'ready'}},
          messageFromChild: '',
        };
      },
      mounted() {
        console.log('mounted!')
        this.myCar = { make: 'Ford', model: { name:'Mondeo'  , status: 'ready'} };
      },
      methods:{
        sendText(event) {
          console.log('sendText',  event.detail[0].message);
          this.messageFromChild = event.detail[0].message;
        }
      },
  }
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="THIS IS VUE 2" style="border:1px dashed green"/>
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
  </div>
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
