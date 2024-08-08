// import axios from "axios";
// const baseURL = "http://localhost:5000/"

// const instance = axios.create({
//     baseURL:baseURL,
//     headers: {
//         "Content-Type": "application/json"
//     },
// });

// export default instance
// src/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export default instance;
