<template>
    <div class="item">
        <div class="tx"></div>
        <div class="info">
            <div class="name">oDlime</div>
            <div class="content">需要设置元素宽度与高度,根据高度看下最多能放几行,再设置-webkit-line-clamp的值为最大行数</div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped>
.item{
    width: 100%;
    height: 70px;
}
.item:hover{
    background-color: #F0F0F0;
}
.tx{
    display: inline-block;
    width: 45px;
    height: 45px;
    background-image: url("https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg");
    background-size: cover;
    border-radius: 50%;
    margin: 13px 5px 10px 20px;
}
.info{
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
    vertical-align: top;
    margin-top: 13px;
    width: calc(100% - 90px);
}

.content{
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    margin-top: 5px;
    font-size: 13px;
    color: #999999;
}
</style>