<script lang="ts">
import axios from "axios";

export default {
  data() {
    return {
      board: {} as {
        name: string,
        estimative: number,
        columns: {
          name: string,
          estimative: number,
          cards: {
            title: string,
            estimative: number;
          }[];
        }[];
      }
    };
  },
  async mounted() {
    const response = await axios({
      url: "http://localhost:3000/boards/1",
      method: "get"
    });
    this.board = response.data;
  }
};
</script>

<template>
  <h2>{{ board.name }} ({{ board.estimative }})</h2>
  <div class="columns">
    <div class="column" v-for="column in board.columns">
      <div class="header">
        <h3>{{ column.name }} ({{ column.estimative }})</h3>
        <span class="badge">{{ column.cards.length }}</span>
      </div>
      <div class="card" v-for="card in column.cards">
        {{ card.title }}
      </div>
    </div>
  </div>
</template>

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

.card {
  background-color: #fff;
  border: #ddd 1px solid;
  border-radius: 4px;
  transition: filter ease-in-out 400ms;
  padding: 1em;

  display: flex;
}

.card:hover {
  filter: drop-shadow(0 0 0.35rem #ddd);
  cursor: grab;
}
</style>
