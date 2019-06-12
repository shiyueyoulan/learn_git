<template>
  <div id="app">
    <div class="moor-item">
      <label for>Switch</label>
      <moor-switch v-model="ligthSwitch">开关(开);</moor-switch>
    </div>
  </div>
</template>

<script>
import MoorSwitch from "./components/MoorSwitch";
export default {
  name: "app",
  data() {
    return {
      ligthSwitch: false
    };
  },
  components: {
    "moor-switch": MoorSwitch
  }
};
</script>

<style>
</style>
