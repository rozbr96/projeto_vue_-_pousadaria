<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import {
    NButton,
    NInput,
    NInputGroup,
    NLayout,
    NLayoutHeader,
    NSpace
  } from 'naive-ui'
</script>

<script lang="ts">
  export default {
    data() {
      return {
        term: ''
      }
    },

    methods: {
      search() {
        this.$router.push({ name: 'Inns', query: { search_for: this.term } })
      }
    }
  }
</script>

<template>
  <NLayout>
    <NLayoutHeader :style="{ height: '64px', marginTop: '10px' }">
      <NSpace justify="space-around">
        <RouterLink :to="{ name: 'Home' }" :style="{ textDecoration: 'none' }">
          Pousadas
        </RouterLink>

        <NInputGroup>
          <NInput
            placeholder="Busque pelo nome"
            v-model:value="term"
          />

          <NButton @click="search">
            Buscar
          </NButton>
        </NInputGroup>
      </NSpace>
    </NLayoutHeader>

    <NLayout :style="{ height: 'calc(100vh - 74px)' }" :key="$route.fullPath">
      <RouterView />
    </NLayout>
  </NLayout>
</template>
