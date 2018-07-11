<style scoped>
  .page{
    width: 600px;
    margin: 20px;
    padding-right: 0px;
  }
</style>
<template>
<div>
<Table :columns="columns10" :data="data9"></Table>
     <Page :total="100" class="page"></Page>
</div>
    
</template>
<script>
    import expandRow from './table-expand.vue';
    export default {
        components: { expandRow },
        data () {
            return {
                columns10: [
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '题目',
                        key: 'title'
                    },
                    {
                        title: '作者',
                        key: 'auther'
                    },
                    {
                        title:'标签',
                        key:'tag'
                    },
                    {
                        title: '时间',
                        key: 'date'
                    }
                ],
                data9: [
                    {
                        id:'1',
                        title: '我的第一篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0',
                    },
                     {
                        id:'2',
                        title: '我的第二篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    },
                     {
                        id:'3',
                        title: '我的第三篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    },
                     {
                        id:'4',
                        title: '我的第四篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    },
                    {
                        id:'5',
                        title: '我的第五篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    },
                    {
                        id:'6',
                        title: '我的第五篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    },
                    {
                        id:'6',
                        title: '我的第六篇文章',
                        auther: 'jiumi',
                        tag: '前端',
                        date:'2018年07月11日15:40:06',
                        web: '技术',
                        sum: '1000',
                        comments: '234',
                        like:'123',
                        dislike:'0'
                    }
                ]
            }
        }
    }
</script>