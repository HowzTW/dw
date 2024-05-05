<script setup>
const props = defineProps({
  filepath: {
    type: String,
    required: true
  }
})

import { ref, watch, watchEffect } from "vue"
var dramaJsonFilename = ref("");
var resultMsg = ref("");
var jsonObj = ref("")

const getJsonData = () => {
    dramaJsonFilename.value = props.filepath;
    fetch(dramaJsonFilename.value)
    .then((r) => r.json())
    .then(
        (json) => {
            jsonObj.value = json;
            resultMsg.value = jsonObj.value;
            console.log(jsonObj.value);
        }
    ) //then
    .catch( 
        (reason) => {
            resultMsg.value = `Error loading json: ${reason} ` 
            console.log('Error loading json:', reason)
            jsonObj.value = "";
        }
    )
}

getJsonData();

watchEffect( 
    () => {
        //dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
        dramaJsonFilename.value = props.filepath;
        getJsonData();
        console.log(dramaJsonFilename.value);
    }
)


</script>

<template>
    <div>
        <p>檔案路徑： {{ filepath }}</p>
        <p>測試結果： {{ resultMsg }}</p>
    </div>
</template>

<style scoped>

</style>
