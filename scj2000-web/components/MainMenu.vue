<template>
    <div class="pt-0">
        <nav class="flex items-center justify-between flex-wrap bg-gray-300 drop-shadow-lg mt-0 p-2 md:p-4">
            <div class="flex items-center flex-shrink-0 text-red-600 mr-6">
                <NuxtLink to="/"><SvgInline name="scj2000" class="mr-2 text-red-600" /></NuxtLink>
                <NuxtLink to="/"><span class="hidden sm:block font-kai text-red-600 text-2xl tracking-tight">快速倉頡中文輸入法</span></NuxtLink>
            </div>
            <div class="block md:hidden">
                <button @click="showMenu = !showMenu" class="flex items-center px-3 py-2 border rounded text-red-400 border-red-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div :class="showMenu ? 'block' : 'hidden'" class="w-full block flex-grow md:flex md:items-center md:w-auto">
                <div v-if="mainMenuItems" class="text-sm md:flex-grow">
                    <AppLink
                        v-for="item in mainMenuItems"
                        :to="item.url" 
                        class="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-gray-700 mr-4">
                        {{ item.title }}
                    </AppLink>
                </div>
                <div v-if="downloadLinkItem">
                    <NuxtLink :to="downloadLinkItem?.url"  class="inline-block text-sm px-4 py-2 leading-none border rounded text-red-500 border-red-500 hover:border-transparent hover:text-gray-600 hover:bg-white mt-4 md:mt-0">{{ downloadLinkItem?.title }}</NuxtLink>
                </div>
            </div>
        </nav>
    </div> 
</template>

<script setup lang="ts">
    import GET_MAIN_MENU from '~/api/graphql/GET_MAIN_MENU.gql'
    import GET_DOWNLOAD_LINK from '~/api/graphql/GET_DOWNLOAD_LINK.gql'
    import type { GetMainMenuQuery, GetDownloadLinkQuery } from '~/api/apollo'

    const { data: mainMenuData } = await useAsyncQuery<GetMainMenuQuery>(GET_MAIN_MENU)
    const mainMenuItems = computed(() => mainMenuData?.value?.mainMenu?.data?.attributes?.menuLink.map((item: any) => item?.menuItem.data?.attributes))

    const { data: downloadLinkData } = await useAsyncQuery<GetDownloadLinkQuery>(GET_DOWNLOAD_LINK)
    const downloadLinkItem = computed(() => downloadLinkData?.value?.downloadLink?.data?.attributes?.menuLink?.menuItem?.data?.attributes)

    const showMenu = ref(false)
</script>
