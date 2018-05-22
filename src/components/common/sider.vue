<style scoped>
.box{
  float: left;
  width: 200px;
  height: 80vh;
}
</style>

<template>
<div class="box">
 <Layout >
      <Sider  :collapsed-width="78" v-model="isCollapsed" style="{height: '80vh'}">
                <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses">
                       <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                网站概况
                            </template>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                             <MenuItem name="1-1">
                              <router-link to="./onetitle">第一个</router-link>
                            </MenuItem>
                            <MenuItem name="1-2">
                            <router-link to="./onetitle">第一个</router-link></MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
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
      name:'hello',
      isCollapsed: false
    }
  },
  computed:{
    menuitemClasses: function () {
        return [
            'menu-item',
            this.isCollapsed ? 'collapsed-menu' : ''
        ]
    }
  }
}
</script>

