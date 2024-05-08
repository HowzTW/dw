<script setup lang="ts">
//import { stringify } from '@vueuse/docs-utils'
import { useLocalStorage } from '@vueuse/core'
import dwJsonStringify from './dwJsonStringify.vue'


const theDefault = {
  name: 'Banana',
  color: 'Yellow',
  size: 'Medium',
  count: 0,
}
const state = useLocalStorage('vue-use-local-storage', theDefault)
const state2 = useLocalStorage('vue-use-local-storage', theDefault)

const text = JSON.stringify(state2._value)
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
  </div>
</template>