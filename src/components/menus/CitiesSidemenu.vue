
<script setup lang="ts">
  import { RouterLink } from 'vue-router'

  import {
    NDivider,
    NList,
    NListItem,
    NSpace
  } from 'naive-ui'

  import API from '@/libs/api'


  defineOptions({
    data() {
      return {
        cities: [] as string[]
      }
    },

    mounted() {
      API.get<string[]>('/cities').then(cities => { this.cities = cities })
    }
  })
</script>

<template>
  <NSpace vertical>
    <h2 :style="{ textAlign: 'center' }">Cidades</h2>

     <NDivider/>

    <NList hoverable>
      <RouterLink
        v-for="city of cities"
        :to="{ name: 'Inns', query: { in_city: city } }"
      >
        <NListItem>
          {{ city }}
        </NListItem>
      </RouterLink>
    </NList>
  </NSpace>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
</style>
