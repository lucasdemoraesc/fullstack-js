<script setup lang="ts">
import Board from '../entities/Board';
import Column from '../entities/Column';
import CardComponent from './CardComponent.vue';
import NewCardComponent from './NewCardComponent.vue';

defineProps({
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
  <div class="column">
    <div class="header">
      <h3>{{ column.name }}
        <span class="column-estimative">({{ column.estimative }})</span>
      </h3>
      <span class="badge">{{ column.cards.length }}</span>
    </div>

    <CardComponent v-for="card in column.cards"
      :card="card"
      :board="board"
      :column="column">
    </CardComponent>
    <NewCardComponent :board="board"
      :column="column"></NewCardComponent>
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

.column .header {
  display: flex;
  align-items: center;
  gap: 6px;
}

.column .header .badge {
  display: inline-block;
  padding: 2px 5px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  border-radius: 20px;
  background-color: rgba(175, 184, 193, 0.2);
  color: rgb(87, 96, 106);
  margin-right: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
}
</style>
