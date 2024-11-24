<script setup lang="ts">
import FolderTree from '@/components/FolderTree.vue'

const titleProp = defineProps<{
  title?: string
}>()


</script>


<template>
  <div class="modalContainer">
    <header>
      <h1>{{ titleProp.title }}</h1>
    </header>
    <main>
      <FolderTree />
    </main>
    <button @click="$emit('select', false, true)">OK</button>
    <button @click="$emit('closeModal', false)">Закрыть</button>
  </div>
</template>



<style scoped>
button {
  all: unset;
  background-color: aquamarine;
  color: black;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid grey;
  cursor: pointer;
}

.modalContainer {
  background-color: rgb(67, 67, 67);
  border-radius: 20px;
  width: 50%;
  gap: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}
</style>