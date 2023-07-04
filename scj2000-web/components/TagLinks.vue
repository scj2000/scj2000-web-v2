<template>
    <span v-if="tags" class="text-sm">
        <AppLink
            v-for="item in tags"
            :to="item?.slug" 
            class="text-white bg-gray-300 hover:text-red-300 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >{{ item?.name }}</AppLink>
    </span>
</template>

<script setup lang="ts">
    import type { Tags} from '~/api/apollo'

    const props = defineProps<{
        tags: Array<Tags>
    }>()
</script>