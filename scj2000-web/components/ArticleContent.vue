<template>
    <article>
        <h1 class="text-3xl font-bold text-red-500 font-kai mb-2">{{ title }}</h1>
        <div v-html="body" />
    </article>
</template>

<script setup lang="ts">
    type Article = {
        title: string
        body: string
    }   
    const props = defineProps<{
        data?: Article
    }>()

    const title = computed(() => props.data?.title)
    const body = computed(() => props.data?.body)
</script>