<script setup>
import dwJsonImport from './dwJsonImport.vue'
import { ref } from "vue"

const pl01_id = ref("141191")
const pl01_site = ref("gimy.ai")
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
            <hr />
        </div>
    </div>
</template>

<style scoped>

</style>