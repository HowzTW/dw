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
import { CaretRightOutlined } from "@ant-design/icons-vue"
import { CloseSquareTwoTone } from "@ant-design/icons-vue"
import { FastBackwardFilled, PlayCircleFilled, FastForwardFilled } from "@ant-design/icons-vue"
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

const activeKey = ref(['']);
const activeKeySource = ref(['']);
// const customStyle =
//   'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';




const episodeButtonType = (episodeId) => {
    return 'default';
}

const playEpisodeUrl = ref('https://m3u.haiwaikan.com/xm3u8/137bef9978fd7b0642e71a49d9e2b64be23e0969fe0a59107756273398814aed9921f11e97d0da21.m3u8')
// const setClipurl = (value) => {
//     clipurl.value = value;
// }

const playTitle = ref("繁花")
// const setPlayTitle = (value) => {
//     playTitle.value = value;
// }

const playFilmSource = ref("海外雲")
// const setPlayFilmSource = (value) => {
//     playFilmSource.value = value;
// }

const playEpisodeName = ref("第1集")
// const setPlayEpisodeName = (value) => {
//     playEpisodeName.value = value;
// }

const playVideo = (title, filmsource, episodename, episodeurl) =>
{
    playTitle.value = title;
    playFilmSource.value = filmsource;
    playEpisodeName.value = episodename;
    playEpisodeUrl.value = episodeurl;
    open.value = true;
}

const placement = ref('bottom');
const open = ref(false);
const showDrawer = () => {
  open.value = true;
};
const onClose = () => {
  open.value = false;
};



</script>

<template>
    <a-flex vertical gap="small" style="width: 100%; margin: 0px; padding: 0;">
        <a-flex gap="small" align="start" style="width: 100%; margin: 0px; padding: 0;">
            <a-flex>
                <a-image class="imgCover" :src="dramaObj.dramaCoverUrl" :width="120" />
            </a-flex>
            <a-flex vertical style="width: 100%; margin: 0px; padding: 0;">
                <a-flex align="start" style="width: 100%; margin: 0px; padding: 0;">
                    <a-flex justify="start" style="width: 100%; margin: 0px; padding: 0;">
                        <h1 class="colorPrimary">{{dramaObj.dramaTitle}}</h1>
                    </a-flex>
                    <a-flex justify="end">
                        <CloseSquareTwoTone @click="removeDrama(dramaObj.dramaTitle)" two-tone-color="#E64833" style="font-size: xx-large" />
                    </a-flex>
                </a-flex>
                <a-flex gap="small" justify="start">
                        <a-button class="buttonPrimary" type="primary" size="large"  @click="removeDrama(dramaObj.dramaTitle)"><h3><FastBackwardFilled  style="font-size:larger;" /></h3></a-button>
                        <a-button class="buttonPrimary" type="primary" size="large"  @click="removeDrama(dramaObj.dramaTitle)"><h3>播放 <PlayCircleFilled /></h3></a-button>
                        <a-button class="buttonPrimary" type="primary" size="large"  @click="removeDrama(dramaObj.dramaTitle)"><h3><FastForwardFilled style="font-size:larger;" /></h3></a-button>
                </a-flex>
            </a-flex>
        </a-flex>
        <a-flex vertical style="width: 100%; margin: 0px; padding: 0;">
            <a-collapse v-model:activeKey="activeKey" accordion  expand-icon-position="end" style="width: 100%; margin: 0px; padding: 0;">
                <a-collapse-panel key="title" >
                    <template #header>
                        <h3 class="colorPrimary">影集來源</h3>
                    </template>
                    <a-collapse v-model:activeKey="activeKeySource" accordion style="width: 100%; margin: 0px; padding: 0;">
                        <template #expandIcon="{ isActive }">
                            <CaretRightOutlined :rotate="isActive ? 90 : 0" />
                        </template>
                        <a-collapse-panel v-for="filmSource in dramaObj.filmSources" :key="filmSource.filmSourceId" style="width: 100%; margin: 0px; padding: 0;">
                            <template #header>
                                <h3>{{ filmSource.filmSourceName }}</h3>
                            </template>
                            <a-flex wrap="wrap" gap="small">
                                <!-- <a-button :type="episodeButtonType(episode.episodeId)" size="large" @click="playVideo(jsonObj.dramaTitle, filmSource.filmSourceName, episode.episodeName, episode.episodeUrl)">{{ episode.episodeName }}</a-button> -->
                                <a-button v-for="episode in filmSource.episodes" class="buttonPrimaryGhost" :type="episodeButtonType(episode.episodeId)" size="large" style="width: 120px" @click="playVideo(dramaObj.dramaTitle, filmSource.filmSourceName, episode.episodeName, episode.episodeUrl)"><h3>{{ episode.episodeName }}</h3></a-button>
                            </a-flex>
                        </a-collapse-panel>
                    </a-collapse>
                </a-collapse-panel>
            </a-collapse>
        </a-flex>
    </a-flex>
        
        <!-- <a-flex style="width: 100%; margin: 0px; padding: 0;">
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
                                    <a-button class="buttonAlert" type="primary" size="large" danger @click="removeDrama(dramaObj.dramaTitle)"><CloseOutlined />移除</a-button>
                                </a-flex>
                            </a-flex>
                        </a-flex>
                    </template>
                    <template #extra>
                        <CloseSquareTwoTone @click="removeDrama(dramaObj.dramaTitle)" two-tone-color="#E64833" style="font-size: xx-large" />

                    </template>
                    <p>HELLO HELLOHELLOHELLOHELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLOHELLO</p>

                </a-collapse-panel>
            </a-collapse>
        </a-flex> -->
        <a-drawer
            :title="playTitle"
            :placement="placement"
            :closable="false"
            :open="open"
            @close="onClose"
        >
            <h4>{{ playTitle }}</h4>
            <p>{{ playFilmSource }} - {{ playEpisodeName }}</p>
            <video class="dwVideo" :src="playEpisodeUrl" controls autoplay style="width: 300px;"/>
            <input type="text" :value="playEpisodeUrl"/>
        </a-drawer>

</template>

