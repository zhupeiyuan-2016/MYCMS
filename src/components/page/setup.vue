<template>
<div>
 <Tabs :animated="false"  >
        <TabPane name ="one" label="基本设置" >
          <div
           is ="Setupbase"
          >
          </div>
        </TabPane>
        <TabPane name ="two" label="展示设置" >
        <div
           is ="Setupshow"
          >
          </div>
        </TabPane>
        <TabPane name ="three" label="更多设置" >
        <div
           is ="Setupmore"
          >
          </div>
        </TabPane>
    </Tabs>
</div>
   
</template>
<script>
import Setupbase from '@/components/page/setup/base.vue'
import Setupshow from '@/components/page/setup/show.vue'
import Setupmore from '@/components/page/setup/more.vue'
export default {
  name:'Setup',
  components:{
    Setupbase,
    Setupshow,
    Setupmore
  },
  data:function(){
    return {msg:'设置'}
  },
  // methods:{
  //   router:function () {
  //     router.push('./basesetup')
  //   }
  // }
}
</script>

