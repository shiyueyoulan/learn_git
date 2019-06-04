<template>
  <div class="menu">
    <el-row class="tac">
      <el-col :span="12">
        <!-- <h5>默认颜色</h5> -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">用户列表</template>
            </el-menu-item-group>
            <el-menu-item-group title="用户信息">
              
            </el-menu-item-group>
            <el-submenu index="1-4">    
            </el-submenu>
          </el-submenu>          
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
  .menu{
    /* margin-top: 70px; */
    width: 250px;
  }
</style>
