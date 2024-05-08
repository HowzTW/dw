<script setup>
const props = defineProps({
  jsonStr: {
    type: String,
    //default: '{"name":"Howz","color":"White","size":"Large","count":1}',
    required: true
  }
})

const jsonObj = JSON.parse(props.jsonStr)
const keys = Object.keys(jsonObj)
</script>

<template>
    <div v-for="key in keys">
        {{ key }}: {{ jsonObj[key] }} <br />
    </div>
</template>