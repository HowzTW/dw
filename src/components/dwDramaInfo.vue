<script setup>
const props = defineProps({
  siteAndId: {
    type: String,
    required: true
  }
})

import { dwFetchJsonFile } from '/src/assets/dwServices.js'
import { dwDramaFilename } from '/src/assets/dwServices.js'
import { ref } from "vue"
//import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import { watch, defineEmits } from 'vue';

let removedFlag = ref("");
const removeEmit = defineEmits(['dramaRemoved']);
watch( removedFlag.value, (newValue, oldValue) => {
    removeEmit('dramaRemoved', newValue);
})


let dramaFilename = ref("");
let dramaObj = ref("");
dramaFilename = dwDramaFilename(props.siteAndId);
dwFetchJsonFile(dramaFilename, dramaObj);

let myDramaHistory = JSON.parse(localStorage.getItem('dwMyDramaHistory'));


const removeDrama = (dramaTitle) => {

    Modal.confirm({
        title: `確定是否要刪除該影集 - 【${dramaTitle}】？`,
        //icon: createVNode(ExclamationCircleOutlined),
        content: '如果您確定要刪除，請按下 [確定刪除] ；否則請按 [取消] 。',
        okText: '確定刪除',
        cancelText: '取消',
        onOk() {
            const pos = ref(-1);
            pos.value = myDramaHistory.indexOf(props.siteAndId);
            myDramaHistory.splice(pos.value, 1);
            localStorage.setItem('dwMyDramaHistory', JSON.stringify(myDramaHistory));
            //稍晚回來增加刪除影集觀看紀錄 myEpisodeHistory 的程式碼
            removedFlag = "removed.value";
            Modal.success({
                title: '完成',
                content: `已刪除影集 【${dramaTitle}】！`,
            });
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {
            // Modal.error({
            //     title: '重設密碼錯誤',
            //     content: '很抱歉！密碼錯誤無法執行系統資料重設！',
            //     okText: '關閉'
            // });
        },
    });
}

</script>

<template>
    <a-flex vertical gap="small">
        <a-flex gap="middle">
            <a-flex>
                <a-image class="imgCover" :src="dramaObj.dramaCoverUrl" :width="150" />
            </a-flex>
            <a-flex vertical gap="small">
                <a-flex>
                    <h1>{{dramaObj.dramaTitle}}</h1>
                    <small>{{ removedFlag }}</small>
                </a-flex>
                <a-flex gap="small">
                    <a-button class="buttonPrimary" type="primary" size="large">繼續觀看</a-button>
                    <a-button class="buttonAlert" type="primary" size="large" danger @click="removeDrama(dramaObj.dramaTitle)">移除</a-button>
                </a-flex>
            </a-flex>
        </a-flex>
        <a-flex>
            <a-divider />
        </a-flex>
    </a-flex>
</template>

<style scoped>

</style>