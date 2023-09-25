<template>
  <!-- content wrapper -->
  <div class="grid md:grid-cols-5">
    <div class="md:col-span-1 md:flex md:justify-end">
      <nav class="relative text-right">
        <div class="flex justify-between items-center">
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <NuxtLink to="/" class="hover:text-stone-700">Some Restaurant</NuxtLink>
          </h1>
          <div class="px-4 cursor-pointer md:hidden" id="burguer" @click="toggleDisplay()">
            <Bars3Icon class="w-6" />
          </div>
        </div>
        <ul
          class="absolute right-0 border rounded-md bg-white shadow-md md:border-none md:shadow-none text-sm mt-2 md:mt-6"
          id="menu"
          :class="{ hidden: !display && windowSize < 768 }"
        >
          <li class="text-gray-700 font-bold p-1">
            <NuxtLink to="#" class="flex justify-end px-4 border-r-4 border-red-400">
              <HomeIcon class="w-5 h-5 mr-2" />
              <span>Home</span>
            </NuxtLink>
          </li>
          <li class="p-1">
            <NuxtLink to="#" class="flex justify-end px-4 border-r-4 border-white">
              <QuestionMarkCircleIcon class="w-5 h-5 mr-2" />
              <span>About</span>
            </NuxtLink>
          </li>
          <li class="py-1">
            <NuxtLink to="#" class="flex justify-end px-4 border-r-4 border-white">
              <EnvelopeIcon class="w-5 h-5 mr-2" />
              <span>Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>

    <main class="md:col-span-4 px-16 py-6 bg-gray-100">
      <div class="flex justify-center md:justify-end">
        <NuxtLink to="#" class="btn text-red-400 m-2 md:border-2 border-red-400 hover:bg-red-400 hover:text-white transition ease-out duration-500"
          >Log in</NuxtLink
        >
        <NuxtLink to="#" class="btn text-red-400 m-2 md:border-2 border-red-400 hover:bg-red-400 hover:text-white transition ease-out duration-500"
          >Sign up</NuxtLink
        >
      </div>

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h2 class="text-2xl font-semibold">For Food Lovers</h2>
      </header>

      <div>
        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Latest Recipes</h4>

        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          <!-- cards go here -->
          <div class="card">
            <img src="../assets/img/hamburguer.jpg" alt="hamburguer" class="w-full h-32 sm:h-48 object-cover" />
            <div class="m-4">
              <span class="font-bold">Hamburguer</span>
              <span class="block text-gray-500 text-sm">Recipe By Mario</span>
            </div>
            <div class="badge">
              <ClockIcon class="w-5 h-5 mr-1 inline-block" />
              <span>25 mins</span>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/stew.jpg" alt="stew" class="w-full h-32 sm:h-48 object-cover" />
            <div class="m-4">
              <span class="font-bold">Stew</span>
              <span class="block text-gray-500 text-sm">Recipe By Luigi</span>
            </div>
            <div class="badge">
              <ClockIcon class="w-5 h-5 mr-1 inline-block" />
              <span>40 mins</span>
            </div>
          </div>
          <div class="card">
            <img src="../assets/img/pasta.jpg" alt="pasta" class="w-full h-32 sm:h-48 object-cover" />
            <div class="m-4">
              <span class="font-bold">Pasta</span>
              <span class="block text-gray-500 text-sm">Recipe By Daisy</span>
            </div>
            <div class="badge">
              <ClockIcon class="w-5 h-5 mr-1 inline-block" />
              <span>30 mins</span>
            </div>
          </div>
        </div>

        <h4 class="font-bold pb-2 mt-12 border-b border-gray-200">Most Popular</h4>

        <div class="mt-8">
          <!-- cards go here -->
        </div>
      </div>

      <div class="mt-12 flex justify-center">
        <div
          class="btn rounded p-1 bg-slate-300 text-gray-800 hover:shadow-inner transform hover:scale-110 hover:opacity-50 transition ease-out duration-300"
        >
          Load More
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, ClockIcon, QuestionMarkCircleIcon, EnvelopeIcon, Bars3Icon } from "@heroicons/vue/24/outline";

useHead({
  bodyAttrs: {
    class: "text-stone-500"
  }
});

const display = ref(true);
const windowSize = ref(window.innerWidth);

function toggleDisplay() {
  display.value = !display.value;
}

onMounted(() => {
  window.addEventListener("resize", () => {
    windowSize.value = window.innerWidth;
  });
});
</script>
