<script setup>
import axios from 'axios';
import { useUserStore } from '~/store/user';
import { onMounted } from 'vue';

onMounted(async () => {
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  const runtimeConfig = useRuntimeConfig();
  axios.defaults.baseURL = runtimeConfig.public.api.baseUrl;

  await axios.get('/sanctum/csrf-cookie');
  
  const auth = useUserStore();
  await auth.getUser();
});
</script>


<template>
    <NuxtRouteAnnouncer />
    <MainNav></MainNav>
    <NuxtPage></NuxtPage>
</template>
