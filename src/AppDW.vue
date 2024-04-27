<script setup>
import dwWelcome from './components/dwWelcome.vue' 
import { ref } from "@vue/reactivity"

const section = ref("demo")
const setSection = (value) => {
    section.value = value;
}
</script>

<template>

    <div id="welcome" class="divcenter">
        <dwWelcome />
    </div>

    <!--
    <div id="demoMenu">
        <button @click="setSection('test')">TEST</button>
        <button @click="setSection('demo')">DEMO</button>
    </div>
    <div id="test" v-if="section === 'test'">
        <h1>TEST</h1>
        <a href="http://www.google.com.tw">Google</a>
    </div>
    <div id="demo" v-if="section === 'demo'">
        <h1>DEMO</h1>
        <a href="http://www.cht.com.tw">CHT</a>

    </div>
     -->


</template>

<style scoped>
.divcenter{
    text-align: center;
}
</style>
