import { defineStore } from 'pinia'
import axios from 'axios'

export const useTagStore = defineStore('tagStore', {
  state: () => ({
    tags: [] as Array<any>,
  }),
  actions: {
    async fetchTags() {
      try {
        const response = await axios.get('/api/tags')
        this.tags = response.data.data // assuming you return paginated data
      } catch (error) {
        console.error('Error fetching tags', error)
      }
    },
    async createTag(name: string) {
      try {
        const response = await axios.post('/api/tags', { name })
        this.tags.push(response.data.tag)
      } catch (error) {
        console.error('Error creating tag', error)
      }
    },
    async deleteTag(tagId: number) {
      try {
        await axios.delete(`/api/tags/${tagId}`)
        this.tags = this.tags.filter(tag => tag.id !== tagId)
      } catch (error) {
        console.error('Error deleting tag', error)
      }
    }
  }
})
