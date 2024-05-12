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

var dramaFilename = ref("");
var dramaObj = ref("");
dramaFilename = dwDramaFilename(props.siteAndId);
dwFetchJsonFile(dramaFilename, dramaObj);

</script>

<template>
    <a-flex >
        <a-flex>
            <a-image :src="dramaObj.dramaCoverUrl" :width="200" />
        </a-flex>
        <a-flex vertical gap="small">
            <h1>{{dramaObj.dramaTitle}}</h1>
            <a-button type="primary" size="large">繼續觀看</a-button>
            <a-button type="primary" size="large" danger>移除</a-button>
        </a-flex>
    </a-flex>
    <hr />
</template>