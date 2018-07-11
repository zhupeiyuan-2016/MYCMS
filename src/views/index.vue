<template>
  <div>
    <div
    is="Header"
    >
    </div>
    <div
      is="Sider"
      >     
    </div>
    <div
    is="Content"
    >
      <router-view></router-view>
    </div>
    <div
    is="Fooder"
    >     
    </div>
  </div>
</template>
<script>
import Header from '@/components/common/header.vue';
import Sider from '@/components/common/sider.vue';
import Fooder from '@/components/common/fooder.vue';
import Content from '@/components/common/content.vue'
export default {
  name:'index',
  components:{
    Header,
    Sider,
    Content,
    Fooder
  },
  data:function(){
    return{
      h1:'主页'
    }
  }
}
</script>
