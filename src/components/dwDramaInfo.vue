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
import { Modal } from 'ant-design-vue';
import { watch, defineEmits } from 'vue';
//import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
//import { DeleteOutlined } from "@ant-design/icons-vue"
import { CloseOutlined } from "@ant-design/icons-vue"

let removedFlag = ref("");
const removeEmit = defineEmits(['dramaRemoved']);
watch( removedFlag, (newValue, oldValue) => {
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
            removedFlag.value = "removed";
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

// const showEpisodes = ref(false);
// const showEpisodesText = ref("展開");
// const toggleEpisodesList = () => {
//     showEpisodes.value = !(showEpisodes.value);
//     showEpisodesText.value = (showEpisodes.value) ? ("收合") : ("展開");
// }
const activeKey = ref(['']);

</script>

<template>
    <a-flex vertical gap="large" style="width: 100%; margin: 0px; padding: 0;">
        <!-- <a-flex gap="middle">
            <a-flex>
                <a-image class="imgCover" :src="dramaObj.dramaCoverUrl" :width="150" />
            </a-flex>
            <a-flex vertical gap="small">
                <a-flex>
                    <h1>{{dramaObj.dramaTitle}}</h1>
                </a-flex>
                <a-flex gap="small">
                    <a-button class="buttonPrimary" type="primary" size="large" @click="toggleEpisodesList">{{ showEpisodesText }}</a-button>
                    <a-button class="buttonAlert" type="primary" size="large" danger @click="removeDrama(dramaObj.dramaTitle)"><DeleteOutlined />移除</a-button>
                </a-flex>
            </a-flex>
        </a-flex> -->
        <a-flex style="width: 100%; margin: 0px; padding: 0;">
            <a-collapse v-model:activeKey="activeKey" accordion  expand-icon-position="end" style="width: 100%; margin: 0px; padding: 0;">
                <a-collapse-panel key="title" :show-arrow="false">
                    <template #header>
                        <a-flex gap="middle">
                            <a-flex>
                                <a-image class="imgCover" :src="dramaObj.dramaCoverUrl" :width="150" />
                            </a-flex>
                            <a-flex vertical gap="middle">
                                <a-flex>
                                    <h1>{{dramaObj.dramaTitle}}</h1>
                                </a-flex>
                                <a-flex>
                                    <!-- <CloseSquareTwoTone @click="removeDrama(dramaObj.dramaTitle)" two-tone-color="#E64833" style="font-size: xx-large" /> -->
                                    <a-button class="buttonAlert" type="primary" size="large" danger @click="removeDrama(dramaObj.dramaTitle)"><CloseOutlined />移除</a-button>

                                </a-flex>
                            </a-flex>
                        </a-flex>
                    </template>
                    <p>HELLO HELLOHELLOHELLOHELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLOHELLO</p>
                    <p v-for="filmSource in dramaObj.filmSources">
                        {{ filmSource.filmSourceName }}
                        <a-space v-for="episode in filmSource.episodes" size="large" wrap>
                            <!-- <a-button :type="episodeButtonType(episode.episodeId)" size="large" @click="playVideo(jsonObj.dramaTitle, filmSource.filmSourceName, episode.episodeName, episode.episodeUrl)">{{ episode.episodeName }}</a-button> -->
                            <a-button class="buttonPrimary" type="primary" size="large">{{ episode.episodeName }}</a-button>
                        </a-space>
                    </p>

                </a-collapse-panel>
            </a-collapse>
        </a-flex>
    </a-flex>
</template>

<style scoped>

</style>