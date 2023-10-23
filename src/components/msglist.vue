<template>
    <div class="msglist2">
        <msgitem v-for="(item, index) in hislist" :key="item.uid" :data="item"></msgitem>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import msgitem from './msgitem.vue';
let props = defineProps(['history']);
defineEmits(["refush"])
let hislist = ref([]);
onMounted(() => {
    hislist.value = props.history
})



/**
 * 刷新消息 需要使用emits，连接父组件的刷新事件
 */

function refush(){
    hislist.value = props.history
}

</script>
<style scoped>
.msglist2 {
    height: 100%;
    display: flex;
    flex-direction: column;

}
</style>