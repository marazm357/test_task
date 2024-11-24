<script setup lang="ts">
import { ref } from 'vue';
import ModalWindow from './components/ModalWindow.vue';
import { useIdsStore } from './store/selectedFolderIds';

const stateModal = ref(false)


const store = useIdsStore()

const changeOpen = (arg: boolean) => {
  stateModal.value = arg
}

const updateState = (arg1: boolean) => {
  stateModal.value = arg1
  alert(`Вы выбрали папку с id - ${store.selectedFolderId}`)
}

</script>

<template>
  <div class="container">
    <div v-if="!stateModal" class="buttonContainer">
      <button @click="changeOpen(true)">Открыть</button>
    </div>
    <ModalWindow v-if="stateModal" @closeModal="changeOpen" @select="updateState" title="Модальное окно" />
  </div>
</template>

<style scoped>
button {
  all: unset;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
  color: black;
  border-radius: 20px;
  padding: 15px;
  border: 1px solid grey;
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
}
</style>
