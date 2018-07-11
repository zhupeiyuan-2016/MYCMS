<style scoped>
    .expand-row{
        margin: 16px;
    }
</style>
<template>
    <div>
        <Row class="expand-row">
            <Col span="5">
                <span class="expand-key">点击数:</span>
                <span class="expand-value">{{ row.sum }}</span>
            </Col>
            <Col span="5">
                <span class="expand-key">回复人数:</span>
                <span class="expand-value">{{ row.comments }}</span>
            </Col>
            <Col span="5">
                <span class="expand-key">喜欢人数: </span>
                <span class="expand-value">{{ row.like }}</span>
            </Col>
            <Col span="5">
                <span class="expand-key">不喜欢人数: </span>
                <span class="expand-value">{{ row.dislike }}</span>
            </Col>
            <Col span="4">
               <Button type="success">查看</Button>
            <Button type="warning">删除</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>