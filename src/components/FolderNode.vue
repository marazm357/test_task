<script setup lang="ts">
import { useIdsStore } from '@/store/selectedFolderIds';
import { ref, computed } from 'vue';
import { defineProps } from 'vue';

interface child {
  id: number
  name: string
  children?: child[]
}

const store = useIdsStore()

const props = defineProps<{
  folder: {
    id: number, name: string, children?: child[]
  }
  selectedFolderId: number | null
}>();

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};



const select = () => {
  store.selectedFolderId = props.folder.id
};

const isSelected = computed(() => {
  return props.folder.id === store.selectedFolderId;
});

</script>


<template>
  <li>
    <div @click="toggle" :class="{ selected: isSelected }">
      {{ props.folder.name }}
    </div>
    <button @click="select">Выбрать</button>
    <ul v-if="isOpen">
      <FolderNode v-for="folder in props.folder.children" :key="folder.id" :folder="folder"
        :selectedFolderId="store.selectedFolderId" @select="select" />
    </ul>
  </li>
</template>

<style scoped>
.selected {
  font-weight: bold;
  color: aquamarine;
  background-color: grey;
}
</style>



<!-- <script setup lang="ts">
import { ref, computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

interface Child {
  id: number;
  name: string;
  children?: Child[];
}

const props = defineProps<{
  folder: {
    id: number;
    name: string;
    children?: Child[];
  };
  selectedFolderId: number | null;
}>();

const emit = defineEmits(['select']);

const isOpen = ref(false);
const toggle = () => {
  isOpen.value = !isOpen.value;
};

const isSelected = computed(() => {
  return props.folder.id === props.selectedFolderId;
});

const select = () => {
  emit('select', props.folder.id);
};
</script>

<template>
  <li>
    <div @click="toggle" :class="{ selected: isSelected }">
      {{ props.folder.name }}
    </div>
    <button @click.stop="select">Select</button>
    <ul v-if="isOpen">
      <FolderNode v-for="child in props.folder.children" :key="child.id" :folder="child"
        :selectedFolderId="selectedFolderId" @select="select" />
    </ul>
  </li>
</template>

<style scoped>
.selected {
  font-weight: bold;
  color: aquamarine;
}
</style> -->
