<style scoped>
  .page{
    width: 600px;
    margin: 20px;
    padding-right: 0px;
  }
</style>

<template>
<div>
    <Table border :columns="columns7" :data="data6"></Table>
     <Page :total="100" class="page"></Page>
</div>

</template>
<script>
import router from 'vue-router'
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '标题',
                        key: 'title',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.title)
                            ]);
                        }
                    },
                    {
                        title: '作者',
                        key: 'auther'
                    },
                    {
                        title: '时间',
                        key: 'date'
                    },
                    {
                        title: '字数',
                        key: 'wordnum'
                    },
                    {
                      title:'标签',
                      key:'tag'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                      id:'1',  
                      title: '第一篇草稿',
                        auther:'jiumi',
                        date: '2018年07月11日15:57:19',
                        wordnum: '123',
                        tag:'前端'
                    },
                    {   
                      id:'2',  
                      title: '第二篇草稿',
                        auther:'jiumi',
                        date: '2018年07月11日15:57:19',
                        wordnum: '123',
                        tag:'后端'
                    },
                    {
                        id:'3', 
                        title: '第三篇草稿',
                        auther:'jiumi',
                        date: '2018年07月11日15:57:19',
                        wordnum: '123',
                        tag:'后端'
                    },
                    {
                        id:'4', 
                        title: '第四篇草稿',
                        auther:'jiumi',
                        date: '2018年07月11日15:57:19',
                        wordnum: '123',
                        tag:'后端'
                    }
                ]
            }
        },
        methods: {
            show () {
              console.log('ss')
              router.push('./writepost');
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
