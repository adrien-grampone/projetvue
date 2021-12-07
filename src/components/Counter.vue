<!--HTML code -->
<template>
  <div>
    <p>Count : {{ value }}</p>
    <p>Square : {{ countSquare }}</p>
    <p>Updates : {{ updates }}</p>
    <button @click="removeOne">-</button> <button @click="addOne">+</button>
  </div>
</template>

<!--Js code-->
<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    onlyPositive: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data: () => ({
    updates: 0,
  }),
  computed: {
    countSquare() {
      return this.value * this.value;
    },
  },
  watch: {
    value() {
      this.updates = this.updates + 1;
    },
  },
  methods: {
    addOne() {
      this.$emit("input", this.value + 1);
    },

    removeOne() {
      if (this.onlyPositive) {
        if (this.count - 1 >= 0) {
          this.$emit("input", this.value - 1);
        }
      } else {
        this.$emit("input", this.value - 1);
      }
    },
  },
};
</script>
