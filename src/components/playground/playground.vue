<script setup>
import dwJsonImport from './dwJsonImport.vue'
import dwFilePathCheck from './dwFilePathCheck.vue'
//import dwJsonRW from './dwJsonRW.vue'
import dwLocalStorage from './dwLocalStorage.vue'


import { ref } from "vue"

const pl01_id = ref("141191")
const pl01_site = ref("gimy.ai")

const pl02_filepath = ref("XXXXXdata/drama/gimy.ai.141191.json")
</script>

<template>
    <div>
        <h1>Playground</h1>
        <div>
            <hr />
            <h3>[pl01] JSON 檔案讀取</h3>
            <input type="text" v-model="pl01_site" placeholder="請輸入影集來源網站" />
            <input type="text" v-model="pl01_id" placeholder="請輸入影集編號" />
            <dwJsonImport :site="pl01_site" :id="pl01_id" />
        </div>
        <div>
            <hr />
            <h3>[pl02] 檔案路徑確認</h3>
            <input type="text" v-model="pl02_filepath" placeholder="請輸入檔案路徑" />
            <dwFilePathCheck :filepath="pl02_filepath" />

        </div>
        <div>
            <h3>[pl03]</h3>
            <dwLocalStorage />
        </div>
    </div>
</template>

<style scoped>

</style>