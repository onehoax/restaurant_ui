<template>
  <li class="text-gray-700 font-bold p-1">
    <NuxtLink to="#" class="flex justify-end px-4 border-r-4" :class="border">
      <!-- icon here -->
      <slot />
      <span>{{ name }}</span>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
defineProps(["name", "border"]);
</script>
