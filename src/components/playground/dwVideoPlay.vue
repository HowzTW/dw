<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

</script>

<template>
    <a-space>
        <a-space>
            <h1>{{ title }}</h1>
        </a-space>
        <a-space>
            <h3>{{ url }}</h3>
        </a-space>
    </a-space>

</template>

<style scoped>

</style>