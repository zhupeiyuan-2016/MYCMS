<style scoped>
  .input{
    width: 400px;
  }
  .mdcontent{
    width: 800px;

  }
  .index{
    z-index: 1000;
  }
</style>

<template>
  <div>
      <Form :model="formItem" :label-width="80">
        <FormItem label="题目">
            <Input v-model="formItem.title" placeholder="题目" class="input"></Input>
        </FormItem>
        <FormItem label="时间" class="input">
          <Row>
              <Col span="11">
                  <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
              </Col>
              <Col span="2" style="text-align: center">-</Col>
              <Col span="11">
                  <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
              </Col>
            </Row>
        </FormItem>
        <FormItem label="栏目">
            <Select v-model="formItem.web" class="input">
                <Option value="beijing">栏目一</Option>
                <Option value="shanghai">栏目二</Option>
                <Option value="shenzhen">栏目三</Option>
            </Select>
        </FormItem>
        <FormItem label="标签">
            <Select v-model="formItem.tag" class="input">
                <Option value="beijing">前端</Option>
                <Option value="shanghai">后端</Option>
                <Option value="shenzhen">积累</Option>
            </Select>
        </FormItem>
           <FormItem>
             <div class="mdcontent">
                <mavon-editor :style="{'z-index':'899'}" v-model="msg"></mavon-editor>
             </div>
            </FormItem>
            <FormItem>
              <Button type="primary" v-on:click="log">立即发布</Button>
              <Button type="ghost" style="margin-left: 8px">存为草稿</Button>
              <Button type="ghost" style="margin-left: 8px">取消</Button>
            </FormItem>
        </Form>
  </div>
</template>
<script>
export default {
  name:'writepost',
  data:function(){
      return{
        namelist:'hello',
        formItem:{
          title:'九米文章',
          tag:'',
          web:'',
          date: '',
          time: '',
        },
        msg:''
      }
  },
  methods:{
    log:function(){
      console.log(this.msg)
    }
  }
}
</script>

