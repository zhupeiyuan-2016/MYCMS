<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
.colorbox {
  width: 220px;
  height: 100px;
  float: left;
  margin: 15px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  overflow: hidden;
}
.box::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.icon {
  width: 80px;
  height: 100px;
  font-size: 80px;
  text-align: center;
  color: white;
  border-right: 2px solid white;
  float: left;
}
.number {
  display: block;
  font-size: 30px;
  text-align: center;
  margin: 20px 7px 5px;
}
h1 {
  position: relative;
  left: 12px;
  color: white;
  font-size: 15px;
}
li {
  list-style-type: none;
  height: 50px;
  font-size: 14px;
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
    <div class="box">
      <div class="colorbox" :style="{background:'#2d8cf0'}">
        <div class="icon">
          <Icon type="person"></Icon>
        </div>
        <span class="number">1324</span>
        <h1>历史访问人数</h1>
      </div>
      <div class="colorbox" :style="{background:'#19be6b'}">
        <div class="icon">
          <Icon type="eye"></Icon>
        </div>
        <span class="number">324</span>
        <h1>今日访问量</h1>
      </div>
      <div class="colorbox" :style="{background:'#ff9900'}">
        <div class="icon">
          <Icon type="ios-navigate-outline"></Icon>
        </div>
        <span class="number">23432</span>
        <h1>分享转载次数</h1>
      </div>
      <div class="colorbox" :style="{background:'#ed3f14'}">
        <div class="icon">
          <Icon type="ios-body-outline"></Icon>
        </div>
        <span class="number">4</span>
        <h1>今日后台登录次数</h1>
      </div>
    </div>
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
          <Table stripe :columns="columns1" :data="data1"></Table>
        </Card>
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
                        key: 'name'
                    },
                    {
                        title: '上传登录时间',
                        key: 'time'
                    },
                    {
                        title: '权限',
                        key: 'permissions',
                        render:(h,params)=>{
                             return h('Tag', params.row.permissions[0])
                          
                        }  
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        time: '2016-10-03',
                        permissions: ['首页','第一个栏目','第一个栏目']
                    },
                    {
                        name: 'Jim Green',
                        time: '2016-10-03',
                        permissions: ['第一个栏目']
                    },
                    {
                        name: 'Joe Black',
                        time: '2016-10-03',
                        permissions: ['第二个栏目']
                    }]
    }
  }
}
</script>

