<template>
  <div class="layout">
    <Navbar/>
    <div class="container mt-5 ">
      <slot />
    </div>
  </div>
</template>
<!-- en Vue 2 solo puede haber un solo elemento raiz -->
<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
  },
};
</script>

<style></style>
