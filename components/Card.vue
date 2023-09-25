<template>
  <div class="card">
    <img :src="path" :alt="alt" class="w-full h-32 sm:h-48 object-cover" />
    <div class="m-4">
      <span class="font-bold">{{ name }}</span>
      <span class="block text-gray-500 text-sm">Recipe By {{ author }}</span>
    </div>
    <div class="badge">
      <ClockIcon class="w-5 h-5 mr-1 inline-block" />
      <span>{{ mins }} mins</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ClockIcon } from "@heroicons/vue/24/outline";
defineProps(["path", "alt", "name", "author", "mins"]);
</script>
