<template>
    <div>
      <h1>Create New Tag</h1>
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
  
        <b-button type="submit" variant="primary">Create Tag</b-button>
      </b-form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useTagStore } from '@/stores/tagStore'
  import { useRouter } from 'vue-router'
  
  const tagStore = useTagStore()
  const router = useRouter()
  
  const name = ref('')
  
  const submitForm = async () => {
    await tagStore.createTag(name.value)
    router.push('/tags') 
  }
  </script>
  