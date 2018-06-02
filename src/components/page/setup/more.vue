<style scoped>
 .btn{
    width: 100px;
    margin: 20px;
  }
   .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>

<template>
<div>
<Tree :data="data5" :render="renderContent"></Tree>
  <Button type="success" size="large" class="btn" v-on:click="yes">确定</Button>
  <Button type="primary" size="large" class="btn">恢复</Button>
    <Modal
        title="Title"
        v-model="modal"
        class-name="vertical-center-modal"
        v-on:on-ok="up">
         <Input v-model="flag[1]" placeholder="Enter something..." style="width: 300px"></Input>
    </Modal>
</div>
    
</template>
<script>
    export default {
        name:'Setupmore',
        data () {
            return {
                flag:[],
                modal:false,
                data5: [
                    {
                        title: '网站目录',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%',
                    
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px',
                                              
                                        }
                                    }),
                                    h('span', data.title),
                                   
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px',
                                      
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-plus-empty',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '52px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: '学院概况',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        methods: {
            up:function(){
                console.log(this.flag[0])
                let arrlength = this.data5[0].children.length;
                for(let i = 0;i<arrlength;i++ ){
                    let key = this.data5[0].children[i].nodeKey;
                    if(key == this.flag[0]){
                        this.data5[0].children[i].title = this.flag[1];
                           console.log("fu")
                    }
                    let length = this.data5[0].children[i].children.length;
                    for(let j = 0;j<length;j++){
                        let key = this.data5[0].children[j].children[j].nodeKey;
                        if(key == this.flag[0]){
                            console.log('sum')
                            this.data5[0].children[i].children[j].title = this.flag[1];
                        }
                    }

                }

            },
            yes:function(){
                console.log(this.data5[0].children)
            },
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%',
                    },
                    on:{
                      click:()=>{
                          console.log(node);
                        this.flag[0] = node.nodeKey;
                        this.flag[1] = data.title;
                        this.modal = true;
                      }
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px',
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px',
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>
