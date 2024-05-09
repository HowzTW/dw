<script setup>
import { ref } from "vue"
import { dwDramaFilename } from '/src/assets/dwServices.js'
import { dwFetchJsonFile } from '/src/assets/dwServices.js'
import { dwMyDramaListReset } from '/src/assets/dwServices.js'
import { dwMyDramaListAdd } from '/src/assets/dwServices.js'


// const filename = dwDramaFilename("gimy.ai", "258606");
// var dramaObj = ref("");
// dramaObj = dwFetchJsonFile(filename);
var myDramaList;
dwMyDramaListReset();
dwMyDramaListAdd("gimy.ai", "258606");
dwMyDramaListAdd("gimy.ai", "141191");
const hello = localStorage.getItem('dwMyDramaList')
const obj = JSON.parse(hello);
const value1 = ref("");
value1.value = obj.dramas[0];
const options1 = ref([
    {
        value: obj.dramas[0],
        label: obj.dramas[0],
    },
    {
        value: obj.dramas[1],
        label: obj.dramas[1],
    },
])

var options2 = ref([]);
for(var i=0; i<obj.dramas.length; i++)
{
    options2.value.push({
        value: obj.dramas[i],
        label: obj.dramas[i],
    })
}


</script>

<template>
    <div>
        <p>JS Test</p>
        <p>Locsl Storage: {{ obj.dramas.length }}</p>
        <a-space>
            <a-select
      v-model:value="value1"
      style="width: 100%"
      :options="options2"
    ></a-select>
    </a-space>
    {{ value1 }}
    </div>
</template>