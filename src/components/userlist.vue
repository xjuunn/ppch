<template>
    <div class="box">
        <div class="search">
            <div class="searchinput">
                <img src="../../public/svg/search.svg"/>
                <input placeholder="搜索"/>
            </div>
            <div class="addicon"><img src="../../public/svg/add.svg" /></div>
        </div>
        1
    </div>
</template>
<script setup>

</script>
<style scoped>
.box {
    height: 100%;
    border-right: 1px solid #000;
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