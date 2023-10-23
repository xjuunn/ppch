<template>
    <div class="msglist2" ref="msglist2">
        <msgitem v-for="(item, index) in hislist" :key="item.uid+index" :data="item"></msgitem>

        <div class="space"><br><br><br><br></div>
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import msgitem from './msgitem.vue';
let props = defineProps(['history']);
let hislist = ref([]);
let msglist2 = ref(null);
watch(() => props.history,
    (newVal, oldVal) => {
        hislist.value = newVal
        // msglist2.value.scrollIntoView(false);
        msglist2.value.scrollTo(500, msglist2.value.scrollHeight);
    },
    { deep: true }
)

</script>
<style scoped>
.msglist2 {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    scroll-behavior: smooth;
    margin-bottom: 30px;
}
.space{
    display: inline-block;
    height: 60px;
}
</style>