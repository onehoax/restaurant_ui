<template>
  <div class="md:col-span-1 md:flex md:justify-end">
    <nav class="relative text-right">
      <div class="flex justify-between items-center">
        <h1 class="font-bold uppercase p-4 border-b border-gray-100">
          <NuxtLink to="/" class="hover:text-stone-700">Some Restaurant</NuxtLink>
          <!-- <ClientOnly>
            <p>{{ windowSize }}</p>
          </ClientOnly> -->
        </h1>
        <div class="px-4 cursor-pointer md:hidden" @click="toggleDisplay()">
          <Bars3Icon class="w-6" />
        </div>
      </div>
      <!-- for screen >= md, always show it
           for screens < md the visibility is controlled by value of "display" -->
      <ul
        :class="display ? 'block' : 'hidden'"
        class="absolute right-0 border rounded-md bg-white shadow-md md:block md:border-none md:shadow-none text-sm mt-2 md:mt-6"
      >
        <NavLink name="Home" border="border-red-400">
          <HomeIcon class="w-5 h-5 mr-2" />
        </NavLink>
        <NavLink name="About" border="border-white">
          <QuestionMarkCircleIcon class="w-5 h-5 mr-2" />
        </NavLink>
        <NavLink name="Contact" border="border-white">
          <EnvelopeIcon class="w-5 h-5 mr-2" />
        </NavLink>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, QuestionMarkCircleIcon, EnvelopeIcon, Bars3Icon } from "@heroicons/vue/24/outline";

// have to run "window.innerWidth" from a client only plugin
// running it here throws an error bc the window object is not available on the server side
// ========= NO NEEDED ANYMORE; TAKEN CARE OF WITH TAILWIND =========
const { $winSize } = useNuxtApp();

const display = ref(false);

// ========= NO NEEDED ANYMORE; TAKEN CARE OF WITH TAILWIND =========
const windowSize = ref($winSize);

function toggleDisplay() {
  display.value = !display.value;
}

// ========= NO NEEDED ANYMORE; TAKEN CARE OF WITH TAILWIND =========
onMounted(() => {
  window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});
</script>
