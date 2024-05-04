<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  site: {
    type: String,
    required: true
  }
})

import { ref, watch, watchEffect } from "vue"
var dramaJsonFilename = ref("");

const jsonObj = ref("original value"); 

const jsonImport = () => {
    //dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
    dramaJsonFilename.value = `data/drama/${props.site}.${props.id}.json`;
    import(dramaJsonFilename.value)
    .then( (module) => {
        jsonObj.value = module.default
    })
    .catch( (reason) => {
        console.log("JsonImport Exception:", reason);
        jsonObj.value = "";
        }
    )
}

jsonImport();

watchEffect( () => {
        dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
        jsonImport();
        console.log(dramaJsonFilename.value);
    }
)
// watch(
//     [() => props.id, () => props.site], 
//     (newData, oldData) => {
//         dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
//         jsonImport();
//         console.log(dramaJsonFilename.value)
//     }
// )



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
        <h4>{{ jsonObj.dramaTitle }}</h4>
        <a :href="jsonObj.dramaUrl" target="blank">{{ jsonObj.dramaUrl }}</a>
        <img class="dramaCover" :src="jsonObj.dramaCoverUrl" />
        <p v-for="filmSource in jsonObj.filmSources">
            {{ filmSource.filmSourceName }}
            <a v-for="episode in filmSource.episodes" :href="episode.episodeUrl" target="blank"> {{ episode.episodeName }}</a>
        </p>

    </div>
</template>

<style scoped>
.dramaCover{
    margin: 5px;
    width: 50%;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));

}
</style>