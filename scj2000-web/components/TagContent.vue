<template>
    <article>
        <h1 class="text-3xl font-bold text-red-500 font-kai mb-2">{{ name }}</h1>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 text-sm">
            <ArticleCard
                v-for="item in articles"
                :data="item">
            </ArticleCard>
        </div> 
    </article>
</template>

<script setup lang="ts">
    import type { Tags, Articles } from '~/api/apollo'
 
    const props = defineProps<{
        data?: Tags
    }>()

    const articles = computed(() => props.data?.articles?.map((item) => item?.articles_id as Articles))
    const name = computed(() => props.data?.name)
</script>