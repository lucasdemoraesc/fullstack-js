<script setup lang="ts">
import Board from '../entities/Board';
import ColumnComponent from './ColumnComponent.vue';
import NewColumnComponent from './NewColumnComponent.vue';

defineProps({
  board: Board
});
</script>

<template>
  <div v-if="board"
    class="board">
    <h2>{{ board.name }} <span id="estimative">{{ board.estimative }}</span></h2>
    <div class="columns">
      <ColumnComponent v-for="column in board.columns"
        :column="column"
        :board="board"></ColumnComponent>
      <NewColumnComponent :board="board"></NewColumnComponent>
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  gap: 6px;
}

.new-column {
  background-color: #fcfcfc;
  border: #eee 1px dashed;
}
</style>
