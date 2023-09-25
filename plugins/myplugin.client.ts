export default defineNuxtPlugin(() => {
  return {
    provide: {
      winSize: window.innerWidth
    }
  };
});
