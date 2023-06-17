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
                <div :title="(item.weight)" class="hover:text-white" style="cursor: pointer;" @click="onWordClick((item.word))">
                {{ item.text }}
                </div>
            </template>
        </vue-word-cloud>
    </div> 
</template>

<script setup lang="ts">
    import VueWordCloud from 'vuewordcloud';
    import GET_TAGS from '~/api/graphql/GET_TAGS.gql'
    import type { GetTagsQuery, TagEntity } from '~/api/apollo'

    const { data: tagCloudData } = await useAsyncQuery<GetTagsQuery>(GET_TAGS, {pageSize: 100})
    const tagCloudItems = computed(() => tagCloudData?.value?.tags?.data.map((item: TagEntity) => [item?.attributes?.name, item?.attributes?.articleCount]))
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
    const onWordClick = (word:string) => {
        console.log(word)
    }
</script>