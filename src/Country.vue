<template>
  <div :id="country.name">
    <h2>{{country.name}}</h2>
    <!-- To-do: fix sizing
      #2: according to unit at use -->
    <img class="flag" :src="country.flag" :alt="country.name" />
  </div>
</template>

<script>

export default {
  props: ['country'],
  data () {
    return {

    }
  },

  methods: {

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
