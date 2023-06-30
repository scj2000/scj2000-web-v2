<template>
    <NuxtLink :to="slug" class="flex flex-col items-start border border-gray-200 rounded-lg shadow mb-2 md:flex-row bg-gray-300">
        <NuxtImg 
            v-if="coverImage?.id"
            class="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
            provider="directus"
            :src="coverImage?.id"
            :modifiers="{ key: 'cover' }"
            alt="" />
        <div class="flex flex-col max-h-48 overflow-hidden justify-start p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-kai font-bold tracking-tight text-red-500 hover:text-red-300">{{title}}</h5>
            <p class="overflow-hidden font-normal text-gray-500 hover:text-gray-700 ">{{summary}}</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    import type { Articles } from '~/api/apollo'
 
    const props = defineProps<{
        data?: Articles
    }>()

    const title = computed(() => props.data?.title)
    const coverImage = computed(() => props.data?.cover_image)
    const summary = computed(() => props.data?.summary)
    const slug = computed(() => props.data?.slug)
</script>