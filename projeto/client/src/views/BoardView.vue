<template>
  <div v-if="data.board">
    <h2>{{ data.board.name }} <span id="estimative">{{ data.board.estimative }}</span></h2>
    <div class="columns">
      <div class="column"
        v-for="column in data.board.columns">
        <div class="header">
          <h3>{{ column.name }} ({{ column.estimative }})</h3>
          <span class="badge">{{ column.cards.length }}</span>
        </div>

        <div class="card"
          v-for="card in column.cards">
          {{ card.title }} ({{ card.estimative }})
          <button @click="data.board?.increaseEstimativeOf(card)">+</button>
          <button @click="data.board?.decreaseEstimativeOf(card)">-</button>
        </div>
        <div class="card new-card">
          <input type="text"
            name="card-title"
            v-model.trim="cardTitle">
          <button @click="data.board?.addCard(column.name, cardTitle, 0)">Add card</button>
        </div>

      </div>
      <div class=" column new-column">
        {{ columnName }}
        <input type="text"
          name="column-name"
          v-model.trim="columnName">
        <button @click="data.board?.addColumn(columnName, true)">Add column</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, reactive, ref } from 'vue';
import Board from '../entities/Board';
import BoardService from '../services/BoardService';

const data: { board: Board | undefined; } = reactive({ board: undefined });
let cardTitle = ref("");
let columnName = ref("");

onMounted(async () => {
  // const boardService = new BoardServiceHttp();
  const boardService = inject("BoardService") as BoardService;
  const board = await boardService.getBoardById(1);
  data.board = board;
});
</script>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  gap: 6px;
}

.column {
  width: 200px;
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

.new-column {
  background-color: #fcfcfc;
  border: #eee 1px dashed;
}

.card {
  background-color: #fff;
  border: #ddd 1px solid;
  border-radius: 4px;
  transition: filter ease-in-out 400ms;
  padding: 1em;

  display: flex;
  gap: 4px;
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

.card:hover {
  filter: drop-shadow(0 0 0.35rem #ddd);
  cursor: grab;
}

.new-card:hover {
  cursor: default;
}
</style>
