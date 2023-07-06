<script setup lang="ts">
    import type { DirectusFiles } from '~/api/apollo'
    const {public: { cdnUrl, ogImageUrl } } = useRuntimeConfig();

    const props = defineProps<{
        data?: DirectusFiles
    }>()

    const ogImage = computed(() => props.data?.id ? `${cdnUrl}/assets/${props.data.id}.png?key=ogimage` : ogImageUrl)

    useSeoMeta({
        ogImage: ogImage.value,
    })
</script>