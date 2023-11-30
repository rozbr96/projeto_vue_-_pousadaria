
<script setup lang="ts">
  import {
    NButton,
    NSpace
  } from 'naive-ui'

  import type { IInn } from '@/interfaces'

  defineProps<{
    inn: IInn
  }>()
</script>

<template>
  <NSpace justify="center">
    <NButton @click="$router.push(`/inns/${inn.id}`)">
      Detalhes
    </NButton>
  </NSpace>
</template>
