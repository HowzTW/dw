<script setup>
import { ref } from "vue"
import dwWelcome from '@/components/dwWelcome.vue'
import dwSystemReset from './components/dwSystemReset.vue'
import dwTest from './components/dwTest.vue'
import dwColorDemo from './components/dwColorDemo.vue'
import dwMain from './components/dwMain.vue'
import playground from './components/playground/playground.vue'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'

let user = ref("")
const setUser = (value) => {
    user.value = value;
}

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


const userChangedHandler = (newUser) => {
    //setUser(newUser);
    user.value = localStorage.getItem('dwUserRole');
    setSection('main');
}

</script>

<template>
    <div id="menu" class="divMenu" v-if="section !== 'welcome'">
        <img class="menuLogo" @click="setSection('main')" src="/images/icon-512.png" />
        <h1 class="menuTitle">追劇小幫手</h1>
        <div class="menuButton" @click="changeSubMenuVisible()">
            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z" />
            </svg>
        </div>
    </div>

    <div id="subMenu" class="divSubMenu" v-if="subMenuVisable === true">
        <div v-if="user === 'admin'">
            <h3 class="subMenuItem" @click="setSection('playground')" >遊園地</h3>
            <hr />
        </div>
        <div>
            <h3 class="subMenuItem" @click="setSection('sysreset')">系統資料重設</h3>
            <hr />
        </div>
        <div>
            <h3 class="subMenuItem" @click="setSection('test')">清除全部影集</h3>
            <hr />
        </div>
        <div>
            <h3 class="subMenuItem" @click="setSection('welcome')">檢視觀看紀錄</h3>
            <hr />
        </div>
    </div>


    <div id="welcome" class="divWelcome" v-if="section === 'welcome'">
        <dwWelcome :user="user" @userChanged="userChangedHandler" />
    </div>

    <div id="main" class="divContent" v-if="section === 'main'">
        <dwMain />
    </div>

    <div id="test" class="divContent" v-if="section === 'test'">
        <dwTest dramasite="gimy.ai" dramaid="258606" />
    </div>

    <div id="demo" class="divContent" v-if="section === 'demo'">
        <dwColorDemo />
    </div>

    <div id="sysreset" class="divContent" v-if="section === 'sysreset'">
        <dwSystemReset />
    </div>

    <div id="playground" class="divContent" v-if="section === 'playground'">
        <playground />
    </div>

</template>

<style>
@import './assets/base.css';

.a {
    color: brown;
}

.divWelcome {
    text-align: center;
    animation: divContentIn 0.5s ease-in-out;
}

.start {
    margin-top: 50px
}

.divContent {
    width: 100%;
    margin: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 80px;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    animation: divContentIn 0.5s ease-in-out;
}

.divMenu {
    background-color: var(--howztw-dw-c-primary);
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
    color: var(--howztw-dw-c-primary-on);
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

.divSubMenu {
    min-width: 200px;
    background-color: white;
    position: fixed;
    top: 65px;
    right: -5px;
    padding: 10px;
    z-index: 998;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));
    border-radius: 5px;
    animation: subMenuIn 0.5s ease-in-out;
}

.subMenuItem {
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight:900;
}

.div100w {
    width:100%;
}

.div50w {
    width:50%;
}

.divFlex {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
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