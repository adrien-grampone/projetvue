<template>
  <div>
    <h1>Users</h1>
    <pre>{{ /*users*/ }}</pre>
    <div v-if="users">
    <h2> Nom : {{users.data.first_name}} </h2>
    <h2> Prénom : {{users.data.last_name}} </h2>
    <h2> Username : {{users.data.username}} </h2>
    <h2> Email : {{users.data.email}} </h2>
    </div>

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
