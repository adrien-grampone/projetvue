const users = [
  { id: "1", username: "toto" },
  { id: "2", username: "tata" },
];

export default {
  getUsers() {
    return new Promise((resolve) => {
      resolve(users);
    });
  },
};
