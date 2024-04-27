<script setup>
import dwWelcome from './components/dwWelcome.vue'
import { ref } from "@vue/reactivity"

const section = ref("welcome")
const setSection = (value) => {
    setSubMenuInvisible();
    section.value = value;
}

const subMenuVisable = ref(false)
const changeSubMenuVisible = () => {
    subMenuVisable.value = !subMenuVisable.value;
}
const setSubMenuInvisible = () => {
    subMenuVisable.value = false;
}
</script>

<template>
    <div id="menu" class="menu" v-if="section !== 'welcome'">
        <img class="menuLogo" src="/images/icon-512.png" />
        <h1 class="menuTitle">追劇小幫手</h1>
        <div class="menuButton" @click="changeSubMenuVisible()">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z" />
            </svg>
        </div>
    </div>

    <div id="subMenu" class="subMenu" v-if="subMenuVisable === true">
        <h3 @click="setSection('test')">新增影集</h3>
        <hr />
        <h3 @click="setSection('demo')">檢視原始資料</h3>
        <hr />
        <h3 @click="setSection('test')">清除全部影集</h3>
        <hr />
        <h3 @click="setSection('welcome')">檢視觀看紀錄</h3>
        <hr />

    </div>

    <div id="welcome" class="divWelcome" v-if="section === 'welcome'">
        <dwWelcome />
        <div class="start" @click="setSection('test')">
            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 8 8">
                <path fill="currentColor" d="M4 0C1.79 0 0 1.79 0 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4M3 2l3 2l-3 2z" />
            </svg>
        </div>
    </div>

    <div id="test" class="divContent" v-if="section === 'test'">
        <h1>TEST</h1>
        <a href="http://www.google.com.tw">Google</a>
    </div>
    <div id="demo" class="divContent" v-if="section === 'demo'">
        <h1>DEMO</h1>
        <a href="http://www.cht.com.tw">CHT</a>

    </div>


</template>

<style scoped>

.divWelcome {
    text-align: center;
    animation: divContentIn 0.5s ease-in-out;
}

.start {
    margin-top: 50px
}

.divContent {
    margin: 0px;
    padding-left: 0px;
    padding-top: 50px;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    animation: divContentIn 0.5s ease-in-out;
}

.menu {
    background-color: brown;
    margin: 0px;
    padding: 5px 5px 5px 5px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    vertical-align: middle;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
    display: flex;
    align-items: center;
    color: blanchedalmond;
    z-index: 999;
    height: 70px;
    animation: menuIn 0.3s ease-in-out;
}

.menuLogo {
    margin: 5px;
    width: 50px;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
}

.menuTitle {
    margin-left: 5px;
    font-weight: bolder;
}

.menuButton {
    position: fixed;
    right: 10px;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.9));
}

.subMenu {
    background-color: white;
    position: fixed;
    min-width: 100px;
    max-width: 200px;
    top: 70px;
    right: -5px;
    padding: 10px;
    z-index: 998;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
    border-radius: 5px;
    animation: subMenuIn 0.5s ease-in-out;
}




@keyframes menuIn {
    0% {
        opacity: 0;
        transform: translateY(-70px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

@keyframes subMenuIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes divContentIn {
    0% {
        opacity: 0;
        transform: translateY(-20px)
    }

    100% {
        opacity: 1;
        transform: translateY(0px)
    }
}
</style>
