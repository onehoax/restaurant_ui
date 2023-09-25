<template>
  <NuxtLink to="#" class="btn text-red-400 m-2 md:border-2 border-red-400 hover:bg-red-400 hover:text-white transition ease-out duration-500">{{
    name
  }}</NuxtLink>
</template>

<script setup lang="ts">
defineProps(["name"]);
</script>
