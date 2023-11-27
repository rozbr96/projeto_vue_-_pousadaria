
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
  <NSpace
    vertical
    align='center'
    :size="30"
  >
    <h1>{{ title }}</h1>

    <DataTable
      :columns="tableColumns"
      :data="tableData"
    />
  </NSpace>
</template>
