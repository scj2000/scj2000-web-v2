<template>
  <div>
    <span v-if="logo" class="h-[1em] w-[1em]" v-html="logo" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    name?: string
  }>()

  // Auto-load icons
  const logos = Object.fromEntries(
    Object.entries(import.meta.glob('~/assets/svg/*.svg', { as: 'raw' })).map(
      ([key, value]) => {
        const filename = key.split('/').pop()!.split('.').shift()
        return [filename, value]
      },
    ),
  )

  // Lazily load the icon
  const logo = props.name && (await logos?.[props.name]?.())
</script>