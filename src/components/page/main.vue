<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
li {
  list-style-type: none;
  height: 50px;
  font-size: 2px;
  line-height: 60px;
  border-bottom: 1px solid #e9eaec;
}
.tagcontent {
  position: absolute;
  right: 30px;
}
.title{
  color:#495060;
  margin: 10px 10px 20px;
}
</style>

<template>
  <div>
    <Row :gutter="20">
        <Col :md="7" :xs="24">
          <Card >
            <div style="text-align:center">
              <img height="90"  src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </div>
              <ul >
                <li>
                  <span >名字:</span>
                  <span class="tagcontent">jiumi</span>
                </li>
                <li>
                  <span>权限:</span>
                  <span class="tagcontent">4</span>
                </li>
                <li>
                  <span>上次登录时间:</span>
                  <span class="tagcontent">2017-9-9 9:10</span>
                </li>
                <li>
                  <span>编辑次数:</span>
                  <span class="tagcontent">234次</span>
                </li>
              </ul>
        </Card>
      </Col >
      <Col :md="17" :xs="24">
        <Card>
          <h1 class="title">管理人员列表</h1>
          <Table  stripe :columns="columns1" :data="data1"></Table>
        </Card>
        <div v-on:click="routera">
          dianji
        </div>
      </Col>
    </Row> 
  </div>
</template>
<script>
export default {
  name:'Main',
  data:function () {
    return{
        columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        width:'100px'
                    },
                    {
                        title: '上传登录时间',
                        key: 'time',
                        width:'140px'
                    },
                    {
                        title: '权限',
                        key: 'permissions',
                        minWidth:'600px',
                        render:(h,params)=>{
                            let div = [];
                            for (let j = 0; j < params.row.permissions.length; j++) {
                                  div.push(h('Tag',params.row.permissions[j]));
                            }
                            return h('div',div)
                          
                        }  
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        time: '2017-9-9 9:10',
                        permissions: ['首页','第一个栏目','第一个栏目','第一个栏目','第一个栏目','第一个栏目']
                    },
                    {
                        name: 'Jim Green',
                        time: '2017-9-9 9:10',
                        permissions: ['第一个栏目']
                    },
                      {
                      name: 'John Brown',
                      time: '2017-9-9 9:10',
                      permissions: ['首页','第一个栏目','第一个栏目','第一个栏目','第一个栏目','第一个栏目']
                    },
                    {
                        name: 'Joe Black',
                        time: '2017-9-9 9:10',
                        permissions: ['第二个栏目']
                    }]
    }
  },
  methods:{
    routera:function (e) {
      router.push('/')
    }
  }
}
</script>

