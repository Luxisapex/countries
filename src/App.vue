<template>
  <div id="app">
    <input type="button" name="name" value="Generate random country" v-on:click="changeCountry">
    <country :country="currentCountry"></country>
  </div>
</template>

<script>

import Country from './Country.vue';

export default {

  name: 'app',

  components: {
    'country': Country
  },

  data () {
    return {
      countries: [],
      countriesLocation: 'https://restcountries.eu/rest/v2',
      currentCountry: 'click the button'
    }
  },

  methods: {
    fetchCountries() {
      fetch(this.countriesLocation)
          .then(blob => blob.json())
          .then(data => this.countries.push(...data));
    },

    // To-do: not only random
    changeCountry() {
      const randomNumber = Math.floor(this.countries.length*Math.random());
      console.log(randomNumber);
      this.currentCountry = this.countries[randomNumber];
    }

  },

  beforeMount() {
    this.fetchCountries();
  }
}
</script>

<style lang="scss">

</style>
