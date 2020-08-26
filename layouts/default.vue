<template>
  <div class="flex flex-col h-screen">
    <my-header style="flex-basis: 60px;"></my-header>
    <Nuxt class="flex-1" />
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
export default {
  components: { MyHeader }
};
</script>
