<script setup>
import dwJsonImport from './dwJsonImport.vue'
import dwFilePathCheck from './dwFilePathCheck.vue'
//import dwJsonRW from './dwJsonRW.vue'
import dwLocalStorage from './dwLocalStorage.vue'
import dwJsTest from './dwJsTest.vue'


import { ref } from "vue"

const pl = ref("00")
const setPl = (value) => {
    pl.value = value;
}
 

const pl01_id = ref("312")
const pl01_site = ref("pttplay.co")

const pl02_filepath = ref("XXXXXdata/drama/gimy.ai.141191.json")
</script>

<template>
    <div>
        <h1>Playground</h1>
        <button @click="setPl('01')">[pl01] JSON 檔案讀取</button>
        <button @click="setPl('02')">[pl02] 檔案路徑確認</button>
        <button @click="setPl('03')">[pl03] Local Storage</button>
        <button @click="setPl('04')">[pl04] Local JS Test</button>
        <div v-if="pl === '01'">
            <hr />
            <h3>[pl01] JSON 檔案讀取</h3>
            <input type="text" v-model="pl01_site" placeholder="請輸入影集來源網站" />
            <input type="text" v-model="pl01_id" placeholder="請輸入影集編號" />
            <dwJsonImport :site="pl01_site" :id="pl01_id" />
        </div>
        <div v-if="pl === '02'">
            <hr />
            <h3>[pl02] 檔案路徑確認</h3>
            <input type="text" v-model="pl02_filepath" placeholder="請輸入檔案路徑" />
            <dwFilePathCheck :filepath="pl02_filepath" />

        </div>
        <div v-if="pl === '03'">
            <h3>[pl03] Local Storage</h3>
            <dwLocalStorage />
        </div>
        <div v-if="pl === '04'">
            <h3>[pl04] Local JS Test</h3>
            <dwJsTest />
        </div>
    </div>
</template>

<style scoped>

</style>