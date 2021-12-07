/*const users = [
  { id: "1", username: "toto" },
  { id: "2", username: "tata" },
];
*/

import axios from "axios";
async function getRandomUser() {
  try {
    const data = await axios.get("https://random-data-api.com/api/users/random_user");
    return data;
  } catch(err) {
    console.log("error: ", err);
  }
}
export default {
  getUsers() {
    return new Promise((resolve) => {
      resolve(getRandomUser());
    });
  },
};
