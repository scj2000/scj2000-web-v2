<template>
    <div class="pt-0">
        <nav class="flex items-center justify-between flex-wrap bg-gray-300 drop-shadow-lg mt-0 p-2 md:p-4">
            <div class="flex items-center flex-shrink-0 text-red-600 mr-6">
                <AppLink to="/"><SvgInline name="scj2000" class="mr-2 text-red-600" /></AppLink>
                <AppLink to="/"><span class="hidden sm:block font-ming text-red-600 text-2xl tracking-tight">快速倉頡中文輸入法</span></AppLink>
            </div>
            <div class="block md:hidden">
                <button @click="toggleMenu()" class="flex items-center px-3 py-2 border rounded text-red-400 border-red-400 hover:text-white hover:border-white">
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
                    <AppLink :to="downloadLinkItem?.url"  class="inline-block text-sm px-4 py-2 leading-none border rounded text-red-500 border-red-500 hover:border-transparent hover:text-gray-600 hover:bg-white mt-4 md:mt-0">{{ downloadLinkItem?.title }}</AppLink>
                </div>
            </div>
        </nav>
    </div> 
</template>

<script setup lang="ts">
    import GET_MAIN_MENU from '~/api/graphql/GET_MAIN_MENU.gql'
    import GET_DOWNLOAD_LINK from '~/api/graphql/GET_DOWNLOAD_LINK.gql'
    import type { GetMainMenuQuery, GetDownloadLinkQuery, Menulinks } from '~/api/apollo'

    const { data: mainMenuData } = await useAsyncQuery<GetMainMenuQuery>(GET_MAIN_MENU)
    const mainMenuItems = computed(() => mainMenuData?.value?.mainmenu?.items?.map((item) => item?.menulinks_id as Menulinks))

    const { data: downloadLinkData } = await useAsyncQuery<GetDownloadLinkQuery>(GET_DOWNLOAD_LINK)
    const downloadLinkItem = computed(() => downloadLinkData?.value?.downloadlink?.menulink as Menulinks)
    const showMenu = ref(false)
    const gtm = useGtm()
    const toggleMenu = () => {
        showMenu.value = !showMenu.value
        gtm?.trackEvent({
            event: 'toggle',
            category: 'main menu',
            action: 'click',
            label: 'Toggle main menu',
            value: 5000,
            noninteraction: false,
        })
    }
    const route = useRoute()
    watch(route, () => showMenu.value = false)
</script>
