<template>
    <div class="pt-0">
        <nav class="flex items-center justify-between flex-wrap bg-white-300 drop-shadow-lg mt-0 p-2">
            <div v-if="sideMenuItems" class="text-sm">
                <AppLink
                    v-for="item in sideMenuItems"
                    :to="item?.url" 
                    class="block m-2 text-red-300 hover:text-white">
                    {{ item?.title }}
                </AppLink>
            </div>
        </nav>
    </div> 
</template>

<script setup lang="ts">
    import GET_SIDE_MENU from '~/api/graphql/GET_SIDE_MENU.gql'
    import type { GetSideMenuQuery, Menulinks } from '~/api/apollo'

    const { data: sideMenuData } = await useAsyncQuery<GetSideMenuQuery>(GET_SIDE_MENU)
    const sideMenuItems = computed(() => sideMenuData?.value?.sidemenu?.items?.map((item) => item?.menulinks_id as Menulinks))
</script>
