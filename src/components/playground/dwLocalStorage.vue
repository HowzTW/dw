<script setup lang="ts">
//import { stringify } from '@vueuse/docs-utils'
import { useLocalStorage } from '@vueuse/core'
import dwJsonStringify from './dwJsonStringify.vue'
import { ref } from "vue"
import { dwFetchJsonFile } from '/src/assets/dwServices.js'

var helloObj = ref("");
dwFetchJsonFile('data/drama/gimy.ai.258606.json', helloObj);
//var helloJsonStr = JSON.stringify(helloObj.value);


const theDefault = {
  name: 'Banana',
  color: 'Yellow',
  size: 'Medium',
  count: 0,
}
const state = useLocalStorage('vue-use-local-storage', theDefault)

const text = JSON.stringify(state._value)

const drama = {
    dramaSite: '',
    dramaId: '',
    dramaTitle: ''
}


const stateDramas = useLocalStorage('dwDramas', [])
const dramasStr = ref("");

const setInitDramas = () =>
{
    deleteDramas();
    drama.dramaId = '141191';
    drama.dramaSite = 'gimy.ai';
    drama.dramaTitle = "櫻桃魔法";
    stateDramas.value.push(drama)

    drama.dramaId = "12345";
    drama.dramaTitle = "測試";
    drama.dramaSite = 'gimy.ai';
    stateDramas.value.push(drama)

    if(Array.isArray(stateDramas.value)) {
        dramasStr.value = "是ARRAY" + stateDramas.value.length;
    }
    else {
        dramasStr.value = "不是ARRAY";
    }
    dramasStr.value = JSON.stringify(stateDramas.value)

}

const deleteDramas = () => {
    //stateDramas.value = null;
    stateDramas.value = [];
    dramasStr.value = JSON.stringify(stateDramas.value)
}

setInitDramas();





// watchEffect( () => {
//     text = JSON.stringify(state2._value)
// }
// )

</script>

<template>
  <div>
    <p>HELLO</p>
    <input v-model="state.name" type="text">
    <input v-model="state.color" type="text">
    <input v-model="state.size" type="text">
    <input v-model.number="state.count" type="range" min="0" step="0.01" max="1000">

    <dwJsonStringify :jsonStr="text" />
    <button @click="setInitDramas">Init</button>
    <button @click="deleteDramas">Reset</button>
    {{ dramasStr }}
    <hr />
    {{ helloObj.dramaTitle }}
</div>
</template>