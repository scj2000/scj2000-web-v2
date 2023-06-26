<template>
    <div class="p-4 text-red-500">
        <vue-word-cloud
            style="height: 200px;"
            :words="tagCloudItems"
            :rotation="(n:number) => itemRotationTurn(n)"
            :color="(n:number) => itemColor(n)"
            font-family="FreeHKKai"
            :font-size-ratio="3"
            :spacing="0.1"
        >
            <template v-slot="item">
                <div :title="(item.weight)" 
                    class="hover:text-white" 
                    style="cursor: pointer;" 
                    @click="onWordClick((item.text))">
                {{ item.text }}
                </div>
            </template>
        </vue-word-cloud>
    </div> 
</template>

<script setup lang="ts">
    import VueWordCloud from 'vuewordcloud';
    import GET_TAGS from '~/api/graphql/GET_TAGS.gql'
    import type { GetTagsQuery, Tags } from '~/api/apollo'

    const { data: tagCloudData } = await useAsyncQuery<GetTagsQuery>(GET_TAGS, {pageSize: 100})
    const tags = computed(() => {
        let map: Map<string, Tags> = new Map()
        tagCloudData?.value?.tags?.reduce((map, item) => {
            map.set(item.name, item)
            return map
        }, map)
        return map
    })
    const tagCloudItems = computed(() => tagCloudData?.value?.tags?.map((item: Tags) => {
        return {
            text: item?.name, 
            weight: item?.articles_func?.count,
            url: item?.slug,
        }
    }))
    const itemRotationTurn = (n: number) => {
        const rotationTurn = [ 1/8, 7/8 ]
        const random = Math.floor(Math.random() * rotationTurn.length)
        return rotationTurn[random]
    }
    const itemColor = (b:number) => {
        const color = ['#CCCCCC', '#AA9999', '#FFAAAA', '#AAAAAA']
        const random = Math.floor(Math.random() * color.length)
        return color[random]
    }
    const onWordClick = async (word:string) => {
        const tag = tags.value.get(word)
        const url = tag?.slug
        await navigateTo(url)
    }
</script>
