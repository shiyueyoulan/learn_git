<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  computed: {
    userName () {
      return localStorage.getItem('username')
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'loginout') {
        this.$router.push({name: 'Login'})
      }
    }
  }
}
</script>

<style scoped>
.header{
  background-color: #409eff;
  position: relative;
  box-sizing: border-box;
  height: 70px;
  line-height: 70px;
  color: #fff;
  width: 100%;
  font-size: 22px;
}
.logo{
  float: left;
  text-align: center;
  width: 250px;
}
.user-info{
  float:right;
  padding-right: 50px;
  font-size: 16px;
  color: #fff;
}
.el-dropdown-link{
  position: relative;
  display: inline-block;
  padding-left: 50px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}
</style>
