<template>
  <h4 class="section">{{ name }}</h4>

  <div class="mt-8 grid lg:grid-cols-3 gap-10">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps(["name"]);
</script>
