<template>
  <!-- content wrapper -->
  <div class="grid md:grid-cols-5">
    <AppHeader />

    <main class="md:col-span-4 px-16 py-6 bg-gray-100">
      <div class="flex justify-center md:justify-end">
        <AuthLink v-for="link in links" :name="link.name" />
      </div>

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h2 class="text-2xl font-semibold">For Food Lovers</h2>
      </header>

      <div>
        <CardSection name="Latest Recipes">
          <Card v-for="card in cards" :path="card.path" :alt="card.alt" :name="card.name" :author="card.author" :mins="card.mins" />
        </CardSection>

        <CardSection name="Most Popular"> </CardSection>
      </div>

      <AppFooter />
    </main>
  </div>
</template>

<script setup lang="ts">
import hamburguer from "/img/hamburguer.jpg";
import stew from "/img/stew.jpg";
import pasta from "/img/pasta.jpg";

useHead({
  bodyAttrs: {
    class: "text-stone-500"
  }
});

const links = [
  {
    name: "log in"
  },
  {
    name: "sign up"
  }
];

const cards = [
  {
    path: hamburguer,
    alt: "hamburguer",
    name: "hamburguer",
    author: "Mario",
    mins: "25"
  },
  {
    path: stew,
    alt: "stew",
    name: "Stwe",
    author: "Luigi",
    mins: "40"
  },
  {
    path: pasta,
    alt: "pasta",
    name: "Pasta",
    author: "Daisy",
    mins: "30"
  }
];
</script>
