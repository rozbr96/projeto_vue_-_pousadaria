
<script setup lang="ts">
  import {
    NButton,
    NSpace
  } from 'naive-ui'

  import type { IRoom } from '@/interfaces'

  defineProps<{
    room: IRoom
  }>()
</script>

<template>
  <NSpace>
    <NButton @click="$router.push(`/rooms/${room.id}`)">
      Detalhes
    </NButton>
  </NSpace>
</template>
