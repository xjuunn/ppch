<template>
    <div class="chatmain">
        <div class="close"></div>
        <div class="head">
            <div class="name"> {{ $props.chatmainuid }} </div>
            <div class="menu_item"><img class="menu" src="../../public/svg/ellipsis-horizontal.svg" /></div>
        </div>
        <div class="chatandsend">
            <div class="msglist">
                <msglist :history="activehistory"></msglist>
            </div>
            <div class="sendmsg">
                <sendmsg @do-send="doSend"></sendmsg>
            </div>
        </div>


    </div>
</template>
<script setup>
import msglist from '@/components/msglist.vue';
import sendmsg from '@/components/sendbox.vue';
import { getUserInfo, sendMsgByUid, getMsgCallback } from '@/hooks/useCore';
import { onMounted, reactive, ref, watch } from 'vue';
let userinfo = getUserInfo();
let props = defineProps(['chatmainuid']);
let msghistory = reactive(new Map());//  消息记录
let activehistory = ref([]);
watch(() => props.chatmainuid, (olddata, newdata) => {
    refushMsg();
})

function doSend(msg) {
    let msgentity = {
        type: "私聊消息",
        uid: getUserInfo().uid,
        name: getUserInfo().name,
        token: "",
        data: msg,
        time: "",
    };
    if (!msghistory.get(props.chatmainuid)) msghistory.set(props.chatmainuid, []);
    msghistory.get(props.chatmainuid).push(msgentity)
    sendMsgByUid(props.chatmainuid, msgentity);
    refushMsg();
}
getMsgCallback((msg) => {
    if (!msghistory.get(msg.uid)) msghistory.set(msg.uid, []);
    msghistory.get(msg.uid).push(msg)
    refushMsg();
})
function refushMsg() {
    activehistory.value = msghistory.get(props.chatmainuid)
}

</script>
<style scoped>
.chatmain {
    background-color: #F2F2F2;
    height: 100%;
    font-family: 'Courier New', Courier, monospace;
}

.close {
    height: 20px;
}

.head {
    height: 35px;
    display: flex;
    justify-items: bottom;
    padding: 0px 10px;
    border-bottom: 1px solid #e7e7e7;
}

.name {
    flex: 1;
    line-height: 30px;
}

.menu_item {
    width: 40px;
    text-align: center;
}

.menu_item img {
    width: 60%;
    height: 100%;
}

.menu_item {
    transition: .2s;
    filter: saturate(0) hue-rotate(275deg);
}

.menu_item:hover {
    filter: blur(0);
}

.chatandsend {
    height: calc(100% - 50px);
}

.msglist {
    height: calc(100% - 150px);
}

.sendmsg {
    height: 150px;
    border-top: 1px solid #e7e7e7;
}

/* border-right: 1px solid #e7e7e7; */
</style>