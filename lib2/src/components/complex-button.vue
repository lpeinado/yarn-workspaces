<template>
  <div class="widget" style="padding:15px; border:1px dashed blue">
      <button @click="buttonClick">SHOW CAR!---{{ message }}! {{ SOME_VALUE | currencyUSD }} </button>
      <div style="padding:5px; border:1px dashed grey" v-if="showCar">
        <p>
          {{ car.make }} {{ car.model.name }} {{ car.model.status }}
        </p>
        <img width="250" height="250" src="https://www.europcar.co.za/assets/images/vehicles/MDMR_PICANTO_2021.png" alt="vehicle image">
      </div>
  </div>
</template>

<script>
  export default {
      name: 'complex-button',
      data() {
        return {
          SOME_VALUE: 3,
          showCar: false,
        };
      },
      props: {
        message: String,
        car: {
          type: Object,
          default: () => ({ make: 'Tesla', model: {name:'Tesla 3', status: 'ready'}})
          }
        },
      methods:{
        buttonClick() {
          console.log('Im a widget', this.car.make, this.car.model);
          this.SOME_VALUE = this.SOME_VALUE + 1;
          this.showCar = !this.showCar; //toggles the car visibility

          this.$emit('send', {message: this.showCar ? 'CAR IS VISIBLE' : 'CAR IS HIDDEN'});

        }
      },
      filters: {
        currencyUSD(value) {
          return '$' + value
        }
      }
  }
</script>
