<template>
  <div class="about">
    关于页面
  </div>
</template>
<script setup>
import chat from '@/components/chat.vue'
import {ref,onMounted} from 'vue';
import Peer from 'peerjs';

onMounted(()=>{
  console.log(Peer);
})


</script>
