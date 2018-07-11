<template>
<div>
 <Tabs :animated="false"  >
        <TabPane name ="one" label="已发布" >
          <div
           is ="release"
          >
          </div>
        </TabPane>
        <TabPane name ="two" label="草稿" >
        <div
           is ="draft"
          >
          </div>
        </TabPane>
    </Tabs>
</div>
   
</template>
<script>
import draft from '@/components/page/write/draft.vue'
import release from '@/components/page/write/release.vue'
export default {
  name:'write',
  components:{
    draft,
    release
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

