<script setup lang="ts">
import { mockFolders } from '@/assets/mockFolders';
import { ref } from 'vue';
import FolderNode from '@/components/FolderNode.vue';

const selectedFolderId = ref<number | null>(null);

const select = (id: number) => {
  selectedFolderId.value = id;
};


// watchEffect(() => {
//   console.log(selectedFolderId.value, 'selectedFolderId')
// })


</script>

<template>
  <div>
    <ul>
      <FolderNode v-for="folder in mockFolders" :key="folder.id" :folder="folder" :selectedFolderId="selectedFolderId"
        @select="select" />
    </ul>
  </div>
</template>