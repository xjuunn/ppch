<template>
    <div class="msgitem" :class="fx">
        <div class="tx" ref="tx"></div>
        <div class="info">
            <div class="name">{{ data.name }}</div>
            <div class="message">{{ data.data }}</div>
        </div>
        <div class="space"></div>
    </div>
</template>
<script setup>
import { getUserInfo } from '@/hooks/useCore';
import { onMounted, ref } from 'vue';

let props = defineProps(['data']);
let fx = ref("left");
let userinfo = getUserInfo();
let tx = ref(null);
onMounted(() => {
    if (userinfo.uid == props.data.uid) {
        fx.value = "right";
    }
    tx.value.style.backgroundImage = `url("${props.data.img}")`;
})

</script>
<style scoped>
.msgitem {
    display: flex;
    padding: 10px;

}

.tx {
    /* display: inline-block; */
    width: 40px;
    height: 40px;
    /* background-image: url("https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg"); */
    background-size: cover;
    border-radius: 50%;
    flex: none;
}

.info {
    margin: 0px 7px;
    display: inline-block;
}

.name {
    font-size: 13px;
    color: #777;
}

.message {
    background: #fff;
    padding: 7px 8px;
    border-radius: 5px;
    white-space: normal;
    text-wrap:pretty;
    flex: 1;

}

.space {
    width: 100px;
    height: 20px;
    display: inline-block;
}

.right {
    justify-content: right;
}

.right .tx {
    order: 3;
}

.right .info {
    order: 2;
}

.right .name {
    text-align: right;
}

.right .space {
    order: 1;
}</style>