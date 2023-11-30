<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import {
    NButton,
    NDialogProvider,
    NInput,
    NInputGroup,
    NLayout,
    NLayoutHeader,
    NLayoutSider,
    NSpace
  } from 'naive-ui'

  import { CitiesSidemenu } from '@/components'


  defineOptions({
    data() {
      return {
        term: '',
        collapsed: true
      }
    },

    methods: {
      search() {
        this.$router.push({ name: 'Inns', query: { search_for: this.term } })
      },

      toggleSidemenu() {
        this.collapsed = !this.collapsed
      }
    }
  })
</script>

<template>
  <NDialogProvider>
    <NLayout>
      <NLayoutHeader :style="{ height: '64px', marginTop: '10px' }">
        <NSpace justify="space-around">
          <NSpace align="center">
            <NButton @click="$router.back">
              &leftarrow; Voltar
            </NButton>

            <RouterLink :to="{ name: 'Home' }" :style="{ textDecoration: 'none' }">
              <h1>Pousadas</h1>
            </RouterLink>
          </NSpace>

          <NInputGroup>
            <NInput
              placeholder="Busque pelo nome"
              v-model:value="term"
            />

            <NButton @click="search">
              Buscar
            </NButton>

            <NButton @click="toggleSidemenu">
              Filtrar por cidades
            </NButton>
          </NInputGroup>
        </NSpace>
      </NLayoutHeader>

      <NLayout
        hasSider
        siderPlacement="right"
        :style="{ height: 'calc(100vh - 74px)' }"
      >
        <NLayout :key="$route.fullPath">
          <RouterView />
        </NLayout>

        <NLayoutSider
          :collapsed="collapsed"
          :collapsed-width="0"
        >
          <CitiesSidemenu/>
        </NLayoutSider>
      </NLayout>
    </NLayout>
  </NDialogProvider>
</template>
