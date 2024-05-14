<script setup>
import { ref } from "vue"

// import { dwFetchJsonFile } from '/src/assets/dwServices.js'
import dwDramaInfo from '@/components/dwDramaInfo.vue'
//import dwWelcome from '@/components/dwWelcome.vue'

let myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
const componentKey = ref(0);
const dramaRemovedHandler = (newValue) => {
    myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
    componentKey.value += 1;
}


// const dramaObj = ref("");
// const fetchDrama = (dramaSiteAndId) => {
//     const dramaFilename = dwDramaFilename1(dramaSiteAndId);
//     dwFetchJsonFile(dramaFilename, dramaObj)
//     return dramaObj.dramaTitle;
// }
</script>

<template>
    <a-flex vertical justify="flex-start" style="width: 100%; margin: 0px; padding: 0px;">
        <a-list size="large" :data-source="myDramaHistory" style="width: 100%; margin: 0px; padding: 0px;" :key="componentKey">
            <template #renderItem="{ item }">
            <a-list-item style="width: 100%; margin: 0px; padding: 0px;">
                <dwDramaInfo :siteAndId="item" @dramaRemoved="dramaRemovedHandler" />
            </a-list-item>
            </template>
        </a-list>
    </a-flex>
</template>

<style scoped>

</style>