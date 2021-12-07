import Backend from "@/services/backend";

export const namespaced = true;
export const state = {
  users: [],
};
export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
};
export const actions = {
  loadUsers({ commit }) {
    Backend.getUsers().then((users) => {
      commit("SET_USERS", users);
    });
  },
};
export const getters = {};
