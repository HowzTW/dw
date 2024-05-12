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

let dramaFilename = ref("");
let dramaObj = ref("");
dramaFilename = dwDramaFilename(props.siteAndId);
dwFetchJsonFile(dramaFilename, dramaObj);

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
                </a-flex>
                <a-flex gap="small">
                    <a-button class="buttonPrimary" type="primary" size="large">繼續觀看</a-button>
                    <a-button class="buttonAlert" type="primary" size="large" danger>移除</a-button>
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