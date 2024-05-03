<script setup>
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

</script>

<template>
    <div>
        <h1>JSON讀寫測試</h1>
        <p>
            請輸入檔案名稱：<br />
            <input type="text" v-model="filename" placeholder="請輸入檔案名稱" /><br />
            <button @click="getJsonData">讀取</button><br />
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