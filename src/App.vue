<template>
  <!-- <nav>
    <router-link to="/">聊天</router-link> |
    <router-link to="/setting">设置</router-link> |
    <router-link to="/about">关于</router-link>
  </nav>
  <router-view/> -->
  <div class="appmain">
    <div class="leftbar">
      <leftbar></leftbar>
    </div>
    <div class="userlist">
      <userlist @chatitemclick="chatitemclick"></userlist>
    </div>
    <div class="chatmain">
      <chatmain :chatmainuid="chatmainuid"></chatmain>
    </div>
  </div>
</template>
<script setup>
import leftbar from '@/components/leftbar.vue';
import userlist from '@/components/userlist.vue';
import chatmain from '@/components/chatmain.vue';
import { initPeer } from "@/hooks/useCore";
import { ref } from 'vue';
let chatmainuid = ref("");
initPeer();
function chatitemclick(uid) {
  chatmainuid.value = uid;
}
pushHistory();

window.addEventListener("popstate", function (e) {
  
}, false);

function pushHistory() {
  var state = {
    title: "title",
    url: "#"
  };
  window.history.pushState(state, "title", "#");
}

</script>

<style scoped>
.appmain {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.appmain>.leftbar {
  width: 60px;
}

.appmain>.userlist {
  width: 280px;
  border-right: 1px solid #e7e7e7;
}

.appmain>.chatmain {
  flex: 1;
}

@media screen and (max-width:700px) {
  .appmain>.userlist {
    flex: 1;
  }

  .appmain>.chatmain {
    display: none;
  }
}
</style>
