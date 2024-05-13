<script setup>
import { ref } from "vue"
import { Modal } from 'ant-design-vue';
// import { dwFetchJsonFile } from '/src/assets/dwServices.js'
import dwDramaInfo from '@/components/dwDramaInfo.vue'
//import dwWelcome from '@/components/dwWelcome.vue'

let myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
let removedFlag = ref("");
const dramaRemovedHandler = (newValue) => {
    myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));
    removedFlag.value = newValue;
    Modal.success({
        title: '完成',
        content: `已刪除影集 ！`,
    });
}


// const dramaObj = ref("");
// const fetchDrama = (dramaSiteAndId) => {
//     const dramaFilename = dwDramaFilename1(dramaSiteAndId);
//     dwFetchJsonFile(dramaFilename, dramaObj)
//     return dramaObj.dramaTitle;
// }
</script>

<template>
    <a-flex vertical justify="flex-start" style="width: 100%">
        <a-flex vertical v-for="drama in myDramaHistory">
            <a-flex>
                <dwDramaInfo :siteAndId="drama" @dramaRemoved="dramaRemovedHandler"/>
            </a-flex>
        </a-flex>
    </a-flex>
</template>

<style scoped>

</style>