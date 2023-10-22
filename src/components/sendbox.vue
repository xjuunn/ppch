<template>
    <div class="sendbox">
        <textarea v-model="msg"></textarea>
        <div class="sendbutton" @click="$emit('doSend',msg)">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"  viewBox="0 0 256 256"
                class="h-4 w-auto">
                <path
                    d="M232,127.89a16,16,0,0,1-8.18,14L55.91,237.9A16.14,16.14,0,0,1,48,240a16,16,0,0,1-15.05-21.34L60.3,138.71A4,4,0,0,1,64.09,136H136a8,8,0,0,0,8-8.53,8.19,8.19,0,0,0-8.26-7.47H64.16a4,4,0,0,1-3.79-2.7l-27.44-80A16,16,0,0,1,55.85,18.07l168,95.89A16,16,0,0,1,232,127.89Z">
                </path>
            </svg>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';

let msg = ref("")

</script>
<style scoped>
.sendbox {
    height: 100%;
}

textarea {
    margin: 20px;
    display: inline-block;
    border: 0px;
    resize: none;
    width: calc(100% - 100px);
    height: 100px;
    background-color: transparent;
    outline: none;
    font-size: 14px;
    vertical-align: top;

}

.sendbutton {
    display: inline-block;
    width: 45px;
    height: 35px;
    border-radius: 10px;
    text-align: center;
    background-color: transparent;
    transition: .2s;
    cursor: pointer;
    margin-top: 20px;
}

.sendbutton svg {
    width: 50%;
    height: 100%;
    fill:#088CE2;
}
.sendbutton:hover{
    background-color: #088CE2;
}
.sendbutton:hover svg{
    fill: #fff;
}
</style>