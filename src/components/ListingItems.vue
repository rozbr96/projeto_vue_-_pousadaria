
<script setup lang="ts">
  import {
    NSpace,
    type DataTableColumn
  } from 'naive-ui'

  import { DataTable } from './tables'

  defineProps<{
    title: string
    tableColumns: DataTableColumn[]
    tableData: any[]
  }>()
</script>

<template>
  <h1 :style="{ textAlign: 'center' }">{{ title }}</h1>

  <DataTable
    :columns="tableColumns"
    :data="tableData"
  />
</template>
