<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link v-if="countries.length" :to="{ name: 'list', params: { list: 'population', limit: randomLimit() }}">Random List</router-link>
    <router-link v-if="countries.length" :to="{ name: 'country', params: { countryName: randomCountry() }}">Random Country</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {

  name: 'app',

  data () {
    return {
      countries: []
    }
  },

  methods: {

    randomCountry() {
      return this.countries[Math.floor(Math.random()*this.countries.length)].name
    },

    randomLimit() {
      return Math.floor(Math.random()*this.countries.length);
    },

    randomList() {
      return 10;
    },

    fetchCountries() {
      fetch(this.$root.url)
        .then(response => response.json())
        .then(data => this.countries.push(...data));
    }
  },
  beforeMount() {
    this.fetchCountries();
  },
}
</script>

<style lang="scss">

</style>
