<script setup>
const props = defineProps({
  dramaid: {
    type: String,
    required: true
  },
  dramasite: {
    type: String,
    required: true
  }
})

import { ref } from "vue"


//import jsonObj from "../assets/data/drama/gimy.ai.258606.json"
var dramaJsonFilename = ref("");
var xx = props.dramaid;
dramaJsonFilename.value = `../assets/data/drama/${props.dramasite}.${props.dramaid}.json`;
//import jsonObj from dramaJsonFilename.value

let jsonObj = ref("original value"); 
import(dramaJsonFilename.value)
.then( (module) => {
    jsonObj.value = module.default
});


/*
import { ref } from "@vue/reactivity"

const filename = ref("/data/drama/gimy.ai.258606.json")
var jsonObj = ref('(blank)')

const getJsonData = () => {
    fetch(filename.value)
    .then((r) => r.json())
    .then(
        (json) => {
            jsonObj.value = json;
            console.log(jsonObj.value);
        },
        (response) => {
            console.log('Error loading json:', response)
        }
    ); //then
} 
*/

</script>

<template>
    <div>
        <h1>{{ dramaJsonFilename }}</h1>
        <p>
            請輸入檔案名稱：<br />
            <input type="text" placeholder="請輸入檔案名稱" /><br />
            <button>讀取</button><br />
            <textarea> {{ jsonObj }}</textarea><br />
        </p>
        <p v-for="filmSource in jsonObj.filmSources">
            {{ filmSource.filmSourceId }}
            <textarea v-for="episode in filmSource.episodes"> {{ episode.episodeId }}</textarea>
        </p>
    </div>
</template>

<style scoped>

</style>