<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/country">Country</router-link>
    <router-link to="/top10">Top 10</router-link>
    <router-view></router-view>
    
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
