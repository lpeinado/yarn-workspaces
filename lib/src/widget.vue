<template>
  <div class="widget" style="padding:15px; border:1px dashed blue">
      {{ msg  }}
      <button @click="buttonClick">Click Me!</button>
  </div>
</template>

<script>
  export default {
      name: 'widget',
      data() {
        return {
          member: {
            name: 'Ras',
            role: 'Ruffus'
          },
        };
      },
      props: {
          msg: String
      },
      methods:{
        buttonClick() { 
          this.member["age"] = 3
          console.log('Im a widget', this.member);
          return true;
        }
      }
  }
</script>
