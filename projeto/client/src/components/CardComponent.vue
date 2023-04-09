<script setup lang="ts">
import Board from '../entities/Board';
import Card from '../entities/Card';
import Column from '../entities/Column';

defineProps({
  card: {
    type: Card,
    required: true
  },
  column: {
    type: Column,
    required: true
  },
  board: {
    type: Board,
    required: true
  }
});

</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="card-title">{{ card.title }}</span>
      <span class="card-estimative"> ({{ card.estimative }})</span>
    </div>
    <div class="card-actions">
      <button class="card-increase-estimative"
        @click="board.increaseEstimativeOf(column, card)">+</button>
      <button class="card-decrease-estimative"
        @click="board.decreaseEstimativeOf(column, card)">-</button>
      <button class="card-delete"
        @click="board.deleteCard(column, card.idCard!)">delete</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: #ddd 1px solid;
  border-radius: 4px;
  transition: filter ease-in-out 300ms;
  padding: 1em;
  gap: 8px;
}

.card:hover {
  filter: drop-shadow(0 0 0.35rem #ddd);
  cursor: grab;
}
</style>
