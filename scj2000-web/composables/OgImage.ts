import type { Maybe, DirectusFiles } from '~/api/apollo'

export function useOgImage(data: Maybe<DirectusFiles> | undefined) {    
    const {public: { cdnUrl, ogImageUrl } } = useRuntimeConfig();
    const ogImage = computed(() => data?.id ? `${cdnUrl}/assets/${data.id}.png?key=ogimage` : ogImageUrl)
    useSeoMeta({
        ogImage: ogImage,
    })
    return ogImage
}