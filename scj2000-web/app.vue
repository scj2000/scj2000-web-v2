<template>
  <div class="app">
    <div class="background-curtain">
      <video v-if="viewport.isGreaterThan('xs')" class="background-curtain" src="/videos/ink.mp4" autoplay loop muted></video>
    </div>
    <div class="main">
      <div class="hidden lg:block">
        <div class="grid grid-cols-12 gap-2 h-2">
          <div class="hidden lg:col-span-3 2xl:col-span-2 lg:block ml-2 bg-gray-500">
          </div>
          <div class="col-span-12 lg:col-span-9 2xl:col-span-10 lg:ml-0">
          </div>
        </div>
      </div>
      <header>
        <MainMenu />
      </header>
      <main class="flex">
        <NuxtPage class="grow" />
      </main>
      <footer>
        <SiteFooter />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
  const viewport = useViewport()

  const { API_TOKEN } = useRuntimeConfig();
  const cookie = useCookie("api-token");
  cookie.value = cookie.value || API_TOKEN;
</script>
