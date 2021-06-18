<template>
  <div class="wrapper">
    <Top/>
    <router-view/>
    <Bottom/>
  </div>
</template>

<script>

import Top from "@/components/blocks/Top";
import Bottom from "@/components/blocks/Bottom";

export default {
  name: 'App',
  components: {Top, Bottom}
}
</script>

<style>

</style>
