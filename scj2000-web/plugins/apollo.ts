export default defineNuxtPlugin((nuxtApp) => {
    // access cookie for auth
    const { API_TOKEN } = useRuntimeConfig();
    const cookie = useCookie("api-token");

    nuxtApp.hook('apollo:auth', ({ client, token }) => {
      // `client` can be used to differentiate logic on a per client basis.
      // apply apollo client token
      token.value = process.server ? API_TOKEN : cookie.value || API_TOKEN;
    })
})