<template>
  <div id="app">
    <p>Q: {{ $store.state.q }}</p>
    <p>Peaked: {{ peak() }}</p>
    <div class="controls">
      <span>
        <input type="text" v-model="valEnq" />
        <button @click="onEnq(valEnq)">Enq</button>
      </span>
      <button @click="onDeq">Deq</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        valEnq: null,
      };
    },
    methods: {
      onDeq() {
        this.$store.commit("deq");
      },
      onEnq(val) {
        this.$store.commit("enq", { node: val });
      },
      peak() {
        return (this.$store.state.peak = this.$store.state.q[0]);
      },
    },
  };
</script>

<style>
  html,
  body {
    font-family: sans-serif;
  }
</style>
