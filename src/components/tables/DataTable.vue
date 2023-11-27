
<script setup lang="ts">
  import {
    NDataTable
  } from 'naive-ui'

  const pageSizes = [5, 10, 20, 30, 50]
  const pageSizesOptions = pageSizes.map(pageSize => {
    return {
      value: pageSize,
      label: `${pageSize}/página`,
      style: {
        justifyContent: 'center'
      }
    }
  })
</script>

<template>
  <NDataTable
    :pagination="{
      pageSizes: pageSizesOptions,
      showSizePicker: true
    }"
  />
</template>
