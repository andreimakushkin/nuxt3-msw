<script setup lang="ts">
const { data, error } = await useFetch('/api/example');
</script>

<template>
  <div>
    <h1>Example</h1>
    <div>{{ data?.url }}</div>
    <pre v-if="error">{{ error }}</pre>
  </div>
</template>
