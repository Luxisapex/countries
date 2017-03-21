<template>
  <div id="app">
    <h1>Welcome</h1>
    <input type="button" name="name" value="" v-on:click="changeHeadline">
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

    changeHeadline() {
      const randomNumber = Math.floor(this.countries.length*Math.random());
      console.log(randomNumber);
      this.currentCountry = this.countries[randomNumber].name;
    }

  },

  beforeMount() {
    this.fetchCountries();
  }
}
</script>

<style lang="scss">

</style>
