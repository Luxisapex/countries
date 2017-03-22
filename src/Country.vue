<template>
  <div id="countries">

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
      country: { name: 'Waiting' }
    }
  },

  methods: {
    changeCountry(country) {
      // const randomNumber = Math.floor(this.countries.length*Math.random());
      this.country = country;
    },

    fetchCountry() {
      const localUrl = this.$root.url + '/name/' + this.$route.params.name;
      fetch(localUrl)
          .then(response => response.json())
          .then(data => this.changeCountry(...data));
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
