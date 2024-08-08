import api from "./api";
import TokenService from "./token.service";

const API_URL = "./api/v1/auth";

const register = async (userName, email, password) => {
  return await api.post(`${API_URL}/signup`, { userName, email, password });
};

const AuthService = {
  register,
};

export default AuthService;
// import api from "./api";

// const register = (userName, email, password) => {
//   return api.post("/api/v1/auth/signup", { userName, email, password });
// };

// const AuthService = {
//   register,
// };

// export default AuthService;
