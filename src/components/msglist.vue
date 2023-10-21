<template>
    <div class="msglist2">
        <msgitem></msgitem>
    </div>
</template>
<script setup>
import msgitem from './msgitem.vue';
</script>
<style scoped>
.msglist2 {
    height: 100%;
    display: flex;
    flex-direction: column-reverse;

}
</style>