<script setup>
import jsonObj from 'data/drama/gimy.ai.258606.json'
import { ref } from "vue"

</script>

<template>
    <div class="div100w primary">
    <p>test111</p>
    <p>{{ jsonObj }}</p>
    </div>
</template>

<style scoped>
@import '../assets/base.css';

.primary {
    color: var(--howztw-dw-c-surface-on-light);
    background-color: var(--howztw-dw-c-surface-light);
}

</style>