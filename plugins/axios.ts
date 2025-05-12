import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  
  axios.defaults.baseURL = config.public.api.baseUrl || 'http://localhost:8000'

  axios.defaults.withCredentials = true

  if (process.client) {
    axios.defaults.headers['X-XSRF-TOKEN'] = document.cookie
      .split(';')
      .find((cookie) => cookie.trim().startsWith('XSRF-TOKEN='))
      ?.split('=')[1] || ''
  }

  nuxtApp.provide('axios', axios)
})
