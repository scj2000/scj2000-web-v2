export default defineNuxtPlugin((nuxtApp) => {
    // access cookie for auth
    const { apiToken } = useRuntimeConfig();
    const cookie = useCookie("api-token");

    nuxtApp.hook('apollo:auth', ({ client, token }) => {
      // `client` can be used to differentiate logic on a per client basis.
      // apply apollo client token
      token.value = process.server ? apiToken : cookie.value || apiToken;
    })
})