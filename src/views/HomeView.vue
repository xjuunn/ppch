<template>
  ad448f4b-8fc7-41a8-9ad3-50427{{ uid }} <br>
  <button @click="test">test</button>
</template>

<script setup>
//    7f18d36b-5188-41b8-8cdf-8c216027ada2
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Peer from 'peerjs';
const store = useStore();
// import {testb,testa} from "@/hooks/useUserList"


let uid = localStorage.getItem("uid");
if(!uid) uid = getUuid();
let peer = new Peer("ad448f4b-8fc7-41a8-9ad3-50427"+uid);
peer.on("open", id => {
  store.commit("isOnline", true)
  localStorage.setItem("uid", uid);
  console.log("ok");
})


function test() {
  let conn = peer.connect("ad448f4b-8fc7-41a8-9ad3-5042794af0fb1ab3c")
  conn.on('open',()=>{
    console.log("已连接");
  })
}
function getUuid() {
  return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}


</script>
