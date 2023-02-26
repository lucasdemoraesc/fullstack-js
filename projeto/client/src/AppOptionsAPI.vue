<template>
  <h2>{{ board.name }} ({{ boardEstimative }})</h2>
  <div class="columns">
    <div class="column" v-for="column in board.columns">
      <div class="header">
        <h3>{{ column.name }} ({{ column.estimative }})</h3>
        <span class="badge">{{ column.cards.length }}</span>
      </div>

      <div class="card" v-for="card in column.cards">
        {{ card.title }} ({{ card.estimative }})
        <button @click="increaseEstimative(card)">+</button>
        <button @click="decreaseEstimative(card)">-</button>
      </div>
      <div class="card new-card">
        <input type="text" name="card-title" v-model.trim="cardTitle">
        <button @click="addCard(column, cardTitle)">Add</button>
      </div>

    </div>
    <div class=" column new-column">
      {{ columnName }}
      <input type="text" name="column-name" v-model.trim="columnName">
      <button @click="addColumn()">Add</button>
    </div>
  </div>
</template>

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
      },
      columnName: "",
      cardTitle: ""
    };
  },
  async mounted() {
    const response = await axios({
      url: "http://localhost:3000/boards/1",
      method: "get"
    });
    this.board = response.data;
  },
  methods: {
    addColumn() {
      if (this.columnName)
        this.board.columns.push({ name: this.columnName, estimative: 0, cards: [] });
    },
    addCard(column: any, cardTitle: string) {
      if (cardTitle) {
        column.cards.push({ title: cardTitle, estimative: 0 });
      }
    },
    increaseEstimative(card: any) {
      card.estimative++;
    },
    decreaseEstimative(card: any) {
      if (card.estimative > 0)
        card.estimative--;
    }
  },
  computed: {
    boardEstimative() {
      return this.board?.columns?.reduce((total, column) =>
        total += column.cards.reduce((total, card) =>
          total += card.estimative, 0),
        0);
    }
  }
};
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
