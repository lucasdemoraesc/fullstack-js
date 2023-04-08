<script setup lang="ts">
import { ref } from 'vue';
import Board from '../entities/Board';

defineProps({
  board: {
    type: Board,
    required: true
  }
});

let columnName = ref("");
</script>

<template>
  <div class="column new-column">
    {{ columnName }}
    <input type="text"
      name="column-name"
      v-model.trim="columnName">
    <button id="btn-new-column"
      @click="board?.addColumn(columnName, true)">Add column</button>
  </div>
</template>

<style scoped>
.column {
  width: 220px;
  background-color: #fbfbfb;
  border: #ddd 1px solid;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}

.new-column {
  background-color: #fcfcfc;
  border: #eee 1px dashed;
}
</style>
