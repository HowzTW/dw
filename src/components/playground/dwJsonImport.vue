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
var resultMsg = ref("");
var jsonObj = ref("")

const getJsonData = () => {
    dramaJsonFilename.value = `data/drama/${props.site}.${props.id}.json`;
    fetch(dramaJsonFilename.value)
    .then((r) => r.json())
    .then(
        (json) => {
            jsonObj.value = json;
            resultMsg.value = "";
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
        dramaJsonFilename.value = `data/drama/${props.site}.${props.id}.json`;
        getJsonData();
        console.log(dramaJsonFilename.value);
    }
)

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
}

/*
import { ref, watch, watchEffect } from "vue"
var dramaJsonFilename = ref("");

const jsonObj = ref("original value"); 
const resultMsg = ref("")

const jsonImport = () => {
    //dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
    dramaJsonFilename.value = `data/drama/${props.site}.${props.id}.json`;
    fetch(dramaJsonFilename.value)
    .then( (module) => {
        jsonObj.value = module.default
        resultMsg = "";
    })
    .catch( (reason) => {
        console.log("JsonImport Exception:", reason);
        resultMsg.value = dramaJsonFilename.value;
        jsonObj.value = "";
        }
    )
}

jsonImport();

watchEffect( () => {
    //dramaJsonFilename.value = `../../assets/data/drama/${props.site}.${props.id}.json`;
    dramaJsonFilename.value = `data/drama/${props.site}.${props.id}.json`;
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
*/


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
        <p>sample id: 141191 or 258606</p>
        <h4>{{ jsonObj.dramaTitle }}</h4>
        <h6>{{ resultMsg }}</h6>
        <div class="divVideo">
            <h4>{{ playTitle }}</h4>
            <p>{{ playFilmSource }} - {{ playEpisodeName }}</p>
            <video class="dwVideo" :src="playEpisodeUrl" controls autoplay />
            <input type="text" :value="playEpisodeUrl"/>
        </div>
        <a :href="jsonObj.dramaUrl" target="blank">{{ jsonObj.dramaUrl }}</a>
        <img class="dramaCover" :src="jsonObj.dramaCoverUrl" />
        <p v-for="filmSource in jsonObj.filmSources">
            {{ filmSource.filmSourceName }}
            <a-space v-for="episode in filmSource.episodes" size="large" wrap>
                <a-button :type="episodeButtonType(episode.episodeId)" size="large" @click="playVideo(jsonObj.dramaTitle, filmSource.filmSourceName, episode.episodeName, episode.episodeUrl)">{{ episode.episodeName }}</a-button>
            </a-space>
        </p>

    </div>
</template>

<style scoped>
.divVideo {
    width: 100%;
    align-items: center;
}

.dwVideo {
    max-width: 700px;
    width: 80%;
}

.dramaCover{
    max-width: 500px;
    margin: 5px;
    width: 40%;
    border-radius: 10px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.7));

}
</style>