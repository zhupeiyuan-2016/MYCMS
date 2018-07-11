<style scoped>
.box{
  float: left;
}
.index{
  z-index: 800;
}
</style>

<template>
<div class="box" >
 <Layout >
               <Sider  :collapsed-width="78" class="index" >
      <!-- <Sider  :collapsed-width="78" v-model="isCollapsed" style="{height: '80vh'}"> -->
                      <Menu active-name="1-2" theme="light" width="auto" >
                <!-- <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses"> -->
                       <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                 <router-link to="./"  :style="{color: '#495060'}">网站概况</router-link>
                            </template>
                            <MenuItem name="1-1">
                            <Icon type="ios-navigate"></Icon>
                                <router-link to="./setup" :style="{color: '#495060'}">网站设置</router-link>
                            </MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                               <Icon type="edit"></Icon>
                                编辑
                            </template>
                            <MenuItem name="2-1">
                               <router-link to="./writepost" :style="{color: '#495060'}">添加文章</router-link>
                            </MenuItem>
                            <MenuItem name="2-2">
                              <router-link to="./write" :style="{color: '#495060'}">工作流</router-link></MenuItem>
                            <MenuItem name="2-3">Option 3</MenuItem>
                        </Submenu>
                </Menu>
            </Sider>
  </Layout>
</div>
 
</template>
<script>
export default {
  name:'MySider',
  data:function(){
    return{
      name:'hello'
    }
  },
  computed:{
   
  }
}
</script>

