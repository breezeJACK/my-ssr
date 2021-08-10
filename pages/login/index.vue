<template>
  <div class="login">
    <div class="login_title">登录</div>
    <el-form :model="usrInfo" class="demo-form-inline">
      <el-form-item props="账号">
        <el-input v-model="usrInfo.usrName" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item props="密码">
        <el-input
          v-model="usrInfo.pwd"
          placeholder="请输入密码"
          autocomplete="off"
          type="password"
        ></el-input>
      </el-form-item>
      <el-button
        @click="login"
        type="primary"
        size="middle"
        style="float: right; margin-bottom: 20px"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script >
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      usrInfo: {
        usrName: 'zhangsan',
        pwd: '',
      },
    }
  },
  methods: {
    login() {
      // todo 暂时假设成功
      this.$store.state.usrInfo = this.usrInfo
      this.$cookies.set('token', 'mockToken')
      this.$router.push('/')
    },
  },
})
</script>

<style lang="scss">
.login {
  display: flex;
  width: 500px;
  margin: 0 auto;
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  flex-direction: column;
  .demo-form-inline {
    width: 300px;
  }
  .login_title {
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
  }
}
</style>
