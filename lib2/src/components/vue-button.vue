<template>
  <div style="padding:15px; border:1px dashed green">
      <button @click="buttonClick">Click Me!</button>
  </div>
</template>

<script>
  export default {
      name: 'vue-button',
      methods:{
        buttonClick() {
          console.log('Im a Vue button');
          return true;
        }
      }
  }
</script>
