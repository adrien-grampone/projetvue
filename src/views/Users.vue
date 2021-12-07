<template>
  <div>
    <h1>Users</h1>
    <pre>{{ users }}</pre>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      users: (state) => state.user.users,
    }),
  },
  mounted() {
    if (this.users.length === 0) {
      console.log("no users found here, fetch API");
      this.$store.dispatch("user/loadUsers");
    }
  },
};
</script>
