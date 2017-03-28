<template>
  <!-- does not render id -->
  <div :id="country.alpha3code">

    <h2>{{country.name}}</h2>
    <!-- To-do: fix sizing
      #2: according to unit at use -->
    <img class="flag" :src="country.flag"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      country: { name: 'Waiting', alpha3code: 'abc' }
    }
  },

  methods: {
    changeCountry(country) {
      // const randomNumber = Math.floor(this.countries.length*Math.random());
      this.country = country;
    },

    fetchCountry() {
      const localUrl = this.$root.url + '/name/' + this.$route.params.countryName;
      fetch(localUrl)
          .then(countryResponse => countryResponse.json())
          .then(countryData => this.changeCountry(...countryData));
    },
  },

  beforeMount() {
    this.fetchCountry();
  },

  watch: {
    $route () {
      this.fetchCountry();
    }
  }
}
</script>

<style lang="scss">

// Make .flag better sized
.flag {
  // width: 100px;
  // height: 100px;
}

</style>
