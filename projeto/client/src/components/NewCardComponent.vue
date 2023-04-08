<script setup lang="ts">
import { ref } from 'vue';
import Board from '../entities/Board';
import Column from '../entities/Column';

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

let cardTitle = ref("");
</script>

<template>
  <div class="card new-card">
    <input type="text"
      name="card-title"
      v-model.trim="cardTitle">
    <button id="btn-new-card"
      @click="board?.addCard(column.name, cardTitle, 0)">Add card</button>
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

.new-card {
  border-style: dashed;
  flex-direction: column;
}

.new-card input {
  background-color: #f5f3f3;
  border-radius: inherit;
  outline: none;
  border: 1px #ccc solid;
  transition: border ease-in-out 200ms;
}

.new-card input:hover,
.new-card input:focus {
  border: 1px #888 solid;
}

.new-card:hover {
  cursor: default;
}
</style>
