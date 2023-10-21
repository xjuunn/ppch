<template>
    <div class="item">
        <div class="tx" ref="tx"></div>
        <div class="info">
            <div class="name">{{ data.name}} <span class="isonline">{{data.online?"":"(离线)" }}</span> </div>
            <div class="content">{{ data.content }}</div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps(["data"])
const tx = ref(null);
onMounted(()=>{
    tx.value.style.backgroundImage =`url("${props.data.img}")`;
    if(!props.data.online){
        tx.value.classList.add("noonline");
    }

})


</script>
<style scoped>
.isonline{
    font-size: 12px;
    color: #777;
}
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
    /* background-image: url("https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg"); */
    background-size: cover;
    border-radius: 50%;
    margin: 13px 5px 10px 20px;
}
.noonline{
    filter: saturate(0);;
}
.info{
    display: inline-block;
    font-family: 'Courier New', Courier, monospace;
    vertical-align: top;
    margin-top: 13px;
    width: calc(100% - 90px);
    cursor: default;
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
    cursor:default;
}
</style>