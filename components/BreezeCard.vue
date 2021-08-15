<template>
  <div class="BreezeCard">
    {{cardInfo.data}}
  </div>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  props:{
    cardInfo:{
      type:Object,
      default() {
        return { data: '' }
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
 
  },
})
</script>

<style lang="scss" scoped>
  .BreezeCard{
    width: 400px;
    display: flex;
    height: 200px;
    border:1px solid black
  }
</style>
