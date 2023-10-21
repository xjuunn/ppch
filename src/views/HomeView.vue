<template>
  <button @click="test">test</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initPeer,addUser} from "@/hooks/useCore";

initPeer();
function test() {
  addUser("664db2967e70");
}

</script>
