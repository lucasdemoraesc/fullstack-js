<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue';
import BoardComponent from '../components/BoardComponent.vue';
import Board from '../entities/Board';
import { DomainEvent } from '../events/DomainEvents';
import BoardService from '../services/BoardService';

const data: { board: Board | undefined; } = reactive({ board: undefined });

onMounted(async () => {
  const boardService = inject<BoardService>("BoardService");
  const board = await boardService?.getBoard(1);

  board?.on("addColumn", async (event: DomainEvent) => {
    const idColumn = await boardService?.saveColumn(event.data.idBoard, event.data);
    event.data.column.idColumn = idColumn;
  });

  board?.on("addCard", async (event: DomainEvent) => {
    const idCard = await boardService?.saveCard(event.data.idBoard, event.data.idColumn, event.data);
    event.data.card.idCard = idCard;
  });

  board?.on("deleteColumn", async (event: DomainEvent) => {
    await boardService?.deleteColumn(event.data.idBoard, event.data.idColumn);
  });

  board?.on("deleteCard", async (event: DomainEvent) => {
    await boardService?.deleteCard(event.data.idBoard, event.data.idColumn, event.data.idCard);
  });

  board?.on("increaseEstimative", async (event: DomainEvent) => {
    await boardService?.updateCard(event.data.idBoard, event.data.idColumn, event.data);
  });

  board?.on("decreaseEstimative", async (event: DomainEvent) => {
    await boardService?.updateCard(event.data.idBoard, event.data.idColumn, event.data);
  });

  data.board = board;
});
</script>

<template>
  <BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped>
</style>
