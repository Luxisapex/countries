<template>
  <div id="app">
    <router-link to="/">Home</router-link>
    <router-link to="/top10">Top 10</router-link>
    <router-link v-if="countries.length" :to="{ name: 'country', params: { name: randomCountry() }}">Random country</router-link>
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
