<template>
    <div class="bar">
        <div class="tx"></div>
        <div class="leftbar_item item active" @click="clickitem($event)">
            <img @click="null" class="active_icon" src="../../public/svg/chatbubble-ellipses.svg" />
            <img @click="null"  class="default_icon" src="../../public/svg/chatbubble-outline.svg" />
        </div>
        <div class="leftbar_item item" @click="clickitem($event)">
            <img class="active_icon" src="../../public/svg/people.svg" />
            <img class="default_icon" src="../../public/svg/people-outline.svg" />
        </div>
        <div class="leftbar_item item" @click="clickitem($event)">
            <img class="active_icon" src="../../public/svg/grid.svg" />
            <img class="default_icon" src="../../public/svg/grid-outline.svg" />
        </div>
        <div class="space"></div>
        <div class="leftbar_bottom">
            <img class="menu" src="../../public/svg/option.svg"/>
        </div>
    </div>
</template>
<script setup>
function clickitem(event) {
    let active = document.getElementsByClassName("active")[0];
    if(active) active.classList.toggle("active");
    event.currentTarget.classList.add("active");
}
</script>
<style scoped>
.bar {
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    text-align: center;
}

.bar>.tx {
    display: inline-block;
    width: 40px;
    height: 40px;
    background-image: url("https://odmg.pages.dev/file/18c46734460af2a2c8d78.jpg");
    background-size: cover;
    border-radius: 20px;
    margin: 20px 10px 10px;

}

.bar>.item {
    height: 40px;
    width: 40px;
    display: inline-block;
    margin: 5px 10px;
    border-radius: 10px;
    cursor: default;
}
.bar>.space{
    flex: 1;
}

.bar>.item:hover {
    background-color: #e9e9e9;
}

.bar>.item img {
    width: 60%;
    margin-top: 7px;
    display: none;
}

.bar>.item .default_icon {
    display: inline-block;
}

.bar>.active .default_icon {
    display: none;
}

.bar>.active .active_icon {
    display: inline-block;
    position: relative;
    animation: activeanim .3s ease-in-out 0s 1 alternate none;
}

.active_icon {
    /* filter:invert(.5) sepia(1) saturate(0) hue-rotate(175deg);; */
}
@keyframes activeanim {
    0%{
        top:-1px
    }
    80%{
        top: 1px;
    }
    100%{
        top: 0px;
    }
}
.leftbar_bottom>.menu{
    width: 40%;
    transition: .2s;
    filter: saturate(0) hue-rotate(275deg);
}
.leftbar_bottom>.menu:hover{
    filter: blur(0);
}


</style>