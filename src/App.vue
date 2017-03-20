<template>
  <div id="app">
    <h1>hello</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      countries: [],
      countriesLocation: 'https://restcountries.eu/rest/v2'
    }
  },

  methods () {
    fetchCountries() {
      fetch(this.countriesLocation)
          .then(blob => blob.json())
          .then(data => this.countries.push(...data));
      // this.pushCities();
      // this.pushProducts();
    },

  },

  beforeMount() {
    this.fetchBalances()
  }
}
</script>

<style lang="scss">

</style>
