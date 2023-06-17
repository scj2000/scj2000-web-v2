<template>
    <article>
        <h3 class="text-xl font-bold text-red-500 font-kai mb-2">{{ name }}</h3>
        <div v-if="articles" class="text-sm">
                <AppLink
                    v-for="item in articles"
                    :to="item?.path?.data?.attributes?.url" 
                    class="block m-2 text-red-300 hover:text-white">
                    {{ item.title }}
                </AppLink>
            </div>
    </article>
</template>

<script setup lang="ts">
    import GET_TAG from '~/api/graphql/GET_TAG.gql'
    import type { GetTagQuery } from '~/api/apollo'

    const props = defineProps<{
        id: Number
    }>()

    const { data: tagData } = await useAsyncQuery<GetTagQuery>(GET_TAG, { id: props.id })
    const articles = computed(() => tagData?.value?.tag?.data?.attributes?.articles?.data?.map((item: any) => item?.attributes))
    const name = computed(() => tagData?.value?.tag?.data?.attributes?.name)
</script>