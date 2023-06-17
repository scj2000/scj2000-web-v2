<template>
    <div class="grid grid-cols-12 gap-2">
        <div class="hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full">
            <section class="p-2">
                <SideMenu />
            </section>
            <section v-if="tagId" class="p-2">
                <Tag :id="tagId" />
            </section>
            <section class="p-2">
                <TagCloud />
            </section>
        </div>
        <div class="col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0">
            <template v-if="article">
                <ArticleContent :data="article" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { flatten as strapiFlatten, type StrapiResponse } from '~/api/utils/strapi'
    import GET_PATH from '~/api/graphql/GET_PATH.gql'
    import type { GetPathQuery, Article } from '~/api/apollo'

    const route = useRoute()

    const path = '/' + [route.params.slug].flat().filter((e: any) => e).join('/')
    const { data } = await useAsyncQuery<GetPathQuery>(GET_PATH, { path })
   
    const articleData = strapiFlatten(data?.value?.paths?.data[0].attributes?.article as StrapiResponse) as unknown as Article
    const article = computed(() => articleData)
    const tagId = computed(() => data?.value?.paths?.data[0].attributes?.article?.data?.attributes?.tags?.data[0].id)
</script>
