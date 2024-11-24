import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIdsStore = defineStore('id', () => {
  const selectedFolderId = ref(0)
  return { selectedFolderId }
})
