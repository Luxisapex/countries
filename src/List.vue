<template>
  <div id="list">
    <h2>Pop top {{ this.$route.params.limit }}</h2>
    <ul id="list">
      <li v-for="country in list">
        {{country.name}}
      </li>

      <!-- To-do: fix sizing
        #2: according to unit at use
      <img class="flag" :src="country.flag"/> -->
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      list: { name: 'Waiting' }
    }
  },

  methods: {
    changeList(list) {
      const sortedList = list.sort((a, b) => a.population < b.population ? 1 : -1);
      const filteredList = list.splice(0, this.$route.params.limit);
      this.list = filteredList;
    },

    fetchList() {
      // const localUrl = this.$root.url + '/name/' + this.$route.params.name;
      fetch(this.$root.url)
          .then(countriesResponse => countriesResponse.json())
          .then(countriesData => this.changeList(countriesData));
    },
  },

  beforeMount() {
    this.fetchList();
  },

  watch: {
    $route () {
      this.fetchList();
    }
  }
}
</script>


<style lang="scss">


</style>
