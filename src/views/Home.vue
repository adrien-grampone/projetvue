<template>
  <div class="home">
    <Counter :onlyPositive="true" v-model="count" />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/Counter.vue";

export default {
  components: {
    Counter,
  },
  data: () => ({
    count: 0,
  }),
};
</script>
