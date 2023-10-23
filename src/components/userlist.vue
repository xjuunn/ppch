<template>
    <div class="box">
        <div class="search">
            <div class="searchinput">
                <img src="../../public/svg/search.svg" />
                <input v-model="searchStr" placeholder="搜索" />
            </div>
            <div class="addicon" @click="addUser"><img src="../../public/svg/add.svg" /></div>
        </div>
        <div class="chatlist">
            <chatitem v-for="(item, index) in chatlist" :key="item.uid" :data="item" @click="$emit('chatitemclick',item.uid)"></chatitem>
        </div>
    </div>
</template>
<script setup>
import chatitem from '@/components/chatitem.vue'
import { ref } from 'vue';
import { addUser as addUserByUid, userInfoList, addUserListChangeHandler } from '@/hooks/useCore';
let chatlist = ref([]);
let uidlist = [];
let searchStr = ref("");
function addUser() {
    if (searchStr.value.length >= 1)
        addUserByUid(searchStr.value.trim());
}

addUserListChangeHandler(() => {
    userInfoList.forEach(item => {
        if (uidlist.includes(item.uid)) return;
        chatlist.value.push({
            img: item.img,
            uid: item.uid,
            name: item.name,
            content: item.content,
            online: true
        })
        uidlist.push(item.uid);
    });

})
</script>
<style scoped>
.box {
    height: 100%;
}

.box>.search {
    width: 85%;
    height: 30px;
    text-align: center;
    margin: 20px auto 5px;
    display: flex;
}

.box .addicon {
    width: 30px;
    height: 30px;
    text-align: center;
    background-color: #F5F5F5;
    border-radius: 5px;
    cursor: pointer;
}

.box .addicon>img {
    width: 70%;
    height: 100%;
}

.box .search .searchinput {
    flex: 1;
    background-color: #f5f5f5;
    margin-right: 10px;
    border-radius: 5px;
    height: 100%;
    text-align: left;
    vertical-align: bottom;
}

.searchinput img {
    width: 15px;
    height: 100%;
    margin-left: 10px;
}

.searchinput input {
    width: 70%;
    position: relative;
    top: -9px;
    left: 3px;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    font-size: 12px;
}

.chatlist {
    overflow-y: scroll;
    height: calc(100% - 60px);
    /* padding-bottom: 30px; */
}
</style>