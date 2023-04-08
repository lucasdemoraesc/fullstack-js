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
    await boardService?.saveColumn(event.data);
  });

  data.board = board;
});
</script>

<template>
  <BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped>
</style>
