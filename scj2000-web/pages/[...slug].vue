<template>
    <div class="grid grid-cols-12 gap-2">
        <div class="hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full">
            <section class="p-2">
                <SideMenu />
            </section>
            <section v-if="tagId" class="p-2">
                <TagArticleLinks :id="tagId" />
            </section>
            <section class="p-2">
                <TagCloud />
            </section>
        </div>
        <div class="col-span-12 my-2 pb-12 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0">
            <template v-if="article">
                <ArticleContent :data="article" class="mb-4" />
                <TagLinks :tags="tags" />
            </template>
            <template v-else-if="tag">
                <TagContent :data="tag" />
                <section class="lg:hidden p-2">
                    <TagCloud />
                </section>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
    import GET_PATH from '~/api/graphql/GET_PATH.gql'
    import type { GetPathQuery, Articles, Tags } from '~/api/apollo'

    const route = useRoute()
    const {public: { siteName, siteDescription, ogImageUrl } } = useRuntimeConfig();

    const path = '/' + [route.params.slug].flat().filter((e: any) => e).join('/')
    const { data } = await useAsyncQuery<GetPathQuery>(GET_PATH, { path })
   
    const article = computed(() => data.value?.articles?.[0] as Articles)
    const tagId = computed(() => data.value?.articles?.[0]?.tags?.[0]?.tags_id?.id)
    const tags =computed(() => data.value?.articles?.[0]?.tags?.map((item) => item?.tags_id) as Array<Tags>)
    const tag = computed(() => data.value?.tags?.[0] as Tags)
    const coverImage = computed(() => article?.value ? article?.value?.cover_image : tag?.value ? tag?.value?.cover_image : null)
    const ogImage = useOgImage(coverImage.value)

    const pageTitle = article.value ? article.value.title : tag.value ? tag.value.name : siteName
    const pageDescription = article.value ? article.value.summary : tag.value ? tag.value.summary : siteDescription

    useSeoMeta({
        title: pageTitle,
        ogTitle: pageTitle,
        description: pageDescription,
        ogDescription: pageDescription,
        ogImage: ogImage,
    })
</script>
