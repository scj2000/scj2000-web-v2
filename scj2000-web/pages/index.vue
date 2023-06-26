<template>
  <div class="grid grid-cols-12 gap-2">
      <div class="hidden lg:col-span-3 2xl:col-span-2 lg:block mx-2 lg:mr-0 bg-gray-500 shadow-lg h-full">
          <section class="p-2">
              <SideMenu />
          </section>
          <section class="p-2">
              <TagCloud />
          </section>
      </div>
      <div class="col-span-12 my-2 lg:m-2 p-2 bg-gray-100 shadow-lg lg:col-span-9 2xl:col-span-10 lg:ml-0">
        <div v-html="welcomeMessage" class="my-6" />
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 text-sm">
            <ArticleCard
                v-for="item in articles"
                :data="item">
            </ArticleCard>
        </div> 
      </div>
  </div>
</template>

<script setup lang="ts">
    import GET_FRONTPAGE from '~/api/graphql/GET_FRONTPAGE.gql'
    import type { GetFrontpageQuery, Articles } from '~/api/apollo'
    const { data } = await useAsyncQuery<GetFrontpageQuery>(GET_FRONTPAGE)

    const articles = computed(() => data.value?.frontpage?.articles?.map((item) => item as Articles))
    const welcomeMessage = computed(() => data.value?.frontpage?.welcome_message)
</script>