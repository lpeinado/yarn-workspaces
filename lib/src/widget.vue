<template>
  <div class="widget" style="padding:15px; border:1px dashed blue">
      {{ msg  }}
      <button @click="buttonClick">Click Me! {{ SOME_VALUE | currencyUSD }} </button>
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
          SOME_VALUE: 3
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
      },
      filters: {
      currencyUSD(value) {
        return '$' + value
      }
    }
  }
</script>
