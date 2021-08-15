<template>
  <div>
    用户名称：{{ $store.state.usrInfo.usrName }}
    <div>
      <el-button @click="logout"> 登出 </el-button>
    </div>
    <div v-for="item in cardInfo" :key="item.guid">
      <BreezeCard :cardInfo="item" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
  asyncData(){
    return {
      cardInfo:[{guid:1,data:"这是一段测试数据"},{guid:2,data:"这是一段测试数据2  "}]
    }
  },
  data() {
    return {
      cardInfo: [],
    }
  },
  methods: {
    logout() {
      this.$store.commit('changUsrInfo', {})
      this.$cookies.set('token', '')
      this.$router.push({
        path: '/login',
      })
    },
  },
  head() {
    return {
      title: '首页信息'
    }
  },
})
</script>
