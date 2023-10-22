<template>
    <div class="box">
        <div class="search">
            <div class="searchinput">
                <img src="../../public/svg/search.svg"/>
                <input v-model="searchStr" placeholder="搜索"/>
            </div>
            <div class="addicon" @click="addUser"><img src="../../public/svg/add.svg" /></div>
        </div>
        <div class="chatlist">
            <chatitem v-for="(item,index) in chatlist" :key="item.uid" :data="item"></chatitem>
        </div>
    </div>
</template>
<script setup>
import chatitem from '@/components/chatitem.vue'
import { ref } from 'vue';
import { addUser as addUserByUid } from '@/hooks/useCore';
let chatlist = ref([]);
// chatlist.value.push({
//     img:"https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg",
//     uid:"skdfasdfadsdfa",
//     name:"odlime1",
//     content:"content1",
//     online:true
// })
let searchStr = ref("");
function addUser(){
    addUserByUid(searchStr.value.trim());
}


// chatlist.value.push({
//     img:"https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg",
//     uid:"skdfasddfasdfa",
//     name:"odlime2",
//     content:"content2",
//     online:false
// })
// chatlist.value.push({
//     img:"https://odmg.pages.dev/file/395ad46d7d12166ca2777.png",
//     uid:"skddfasdfasdfa",
//     name:"odlime3",
//     content:"content3",
//     online:true
// })


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
    vertical-align:bottom;
}
.searchinput img{
    width: 15px;
    height: 100%;
    margin-left: 10px;
}
.searchinput input{
    width: 70%;
    position: relative;
    top: -9px;
    left: 3px;
    border: 0px;
    outline: 0px;
    background-color: transparent;
    font-size: 12px;
}

</style>