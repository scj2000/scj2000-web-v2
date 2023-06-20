<template>
    <article>
        <h3 class="text-xl font-bold text-red-500 font-kai mb-2">{{ name }}</h3>
        <div v-if="articles" class="text-sm">
                <AppLink
                    v-for="item in articles"
                    :to="item?.slug" 
                    class="block m-2 text-red-300 hover:text-white">
                    {{ item?.title }}
                </AppLink>
            </div>
    </article>
</template>

<script setup lang="ts">
    import GET_TAG from '~/api/graphql/GET_TAG.gql'
    import type { Articles, GetTagQuery } from '~/api/apollo'

    const props = defineProps<{
        id: string
    }>()

    const { data } = await useAsyncQuery<GetTagQuery>(GET_TAG, { id: props.id })
    const articles = computed(() => data?.value?.tag?.articles?.map((item) => item?.article as Articles))
    const name = computed(() => data?.value?.tag?.name)
</script>