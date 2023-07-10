<template>
    <article>
        <h1 class="text-3xl font-bold text-red-500 font-ming mb-2">{{ title }}</h1>
        <div v-html="body" />
    </article>
</template>

<script setup lang="ts">
    import type { Articles } from '~/api/apollo'
 
    const props = defineProps<{
        data?: Articles
    }>()

    const title = computed(() => props.data?.title)
    const body = computed(() => props.data?.body)
</script>