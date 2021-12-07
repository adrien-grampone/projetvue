<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="onClick">Goto home</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$router.push({ name: "UserDetails", params: { userId: "zzzz" } });
    },
  },
};
</script>
