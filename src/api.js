import axios from "axios";

export const api = {
  users: {
    create: user => axios.post("/api/users").then(res => res.data.token)
  }
};
