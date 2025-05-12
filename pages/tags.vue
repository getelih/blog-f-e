<template>
    <div>
      <h1>Tags</h1>
      <b-table :items="tags" :fields="fields" hover>
        <template #cell(actions)="row">
          <b-button @click="editTag(row.item)" variant="warning">Edit</b-button>
          <b-button @click="deleteTag(row.item.id)" variant="danger">Delete</b-button>
        </template>
      </b-table>
      <b-button @click="createTag" variant="primary">New Tag</b-button>
    </div>
  </template>
  
  <script setup>
  import { useTagStore } from '@/stores/tagStore'
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const tagStore = useTagStore()
  const router = useRouter()
  
  const fields = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'actions', label: 'Actions' },
  ]
  
  const tags = tagStore.tags
  
  const createTag = () => {

    router.push('/tags/create')
  }
  
  const deleteTag = async (tagId) => {
    await tagStore.deleteTag(tagId)
  }
  
  const editTag = (tag) => {

    router.push(`/tags/edit/${tag.id}`)
  }
  

  tagStore.fetchTags()
  </script>
  