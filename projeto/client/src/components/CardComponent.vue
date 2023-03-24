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
    <div class="header">
      <span class="card-title">{{ card.title }}</span>
      <span class="card-estimative"> ({{ card.estimative }})</span>
    </div>
    <button class="card-increase-estimative"
      @click="board.increaseEstimativeOf(card)">+</button>
    <button class="card-decrease-estimative"
      @click="board.decreaseEstimativeOf(card)">-</button>
  </div>
</template>

<style scoped>
.card {
  background-color: #fff;
  border: #ddd 1px solid;
  border-radius: 4px;
  transition: filter ease-in-out 400ms;
  padding: 1em;
  display: flex;
  gap: 4px;
}

.card:hover {
  filter: drop-shadow(0 0 0.35rem #ddd);
  cursor: grab;
}
</style>
