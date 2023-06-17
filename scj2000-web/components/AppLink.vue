<template>
    <NuxtLink v-if="isExternal" v-bind="$props" target="_blank" rel="noopener">
        <slot/> 
        <ClientOnly>
            <font-awesome-icon class="ml-1" :icon="['fas', 'arrow-up-right-from-square']" />
        </ClientOnly>
    </NuxtLink>
    <NuxtLink v-else v-bind="$props">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps<{
        to?: string
    }>()
    const isExternal = computed(() =>  typeof props.to === 'string' && props.to.startsWith('http'))
</script>