<template>
    <div>
      <h1>Edit Tag</h1>
      <b-form @submit.prevent="submitForm">
        <b-form-group label="Tag Name" label-for="name">
          <b-form-input
            id="name"
            v-model="name"
            type="text"
            placeholder="Enter tag name"
            required
          ></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Update Tag</b-button>
      </b-form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useTagStore } from '@/stores/tagStore'
  import { useRouter, useRoute } from 'vue-router'
  
  const tagStore = useTagStore()
  const router = useRouter()
  const route = useRoute()
  
  const name = ref('')
  
  onMounted(async () => {
    const tagId = route.params.id
    const tag = tagStore.tags.find(tag => tag.id === parseInt(tagId))
    if (tag) {
      name.value = tag.name
    }
  })
  
  const submitForm = async () => {
    await tagStore.updateTag(route.params.id, name.value) 
    router.push('/tags') 
  }
  </script>
  