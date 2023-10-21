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
      <userlist></userlist>
    </div>
    <div class="chatmain">
      <chatmain></chatmain>
    </div>
  </div>
</template>
<script setup>
import leftbar from '@/components/leftbar.vue';
import userlist from '@/components/userlist.vue';
import chatmain from '@/components/chatmain.vue';
</script>

<style scoped>
.appmain {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.appmain>.leftbar {
  width: 60px;
}

.appmain>.userlist {
  width: 250px;
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
}</style>
