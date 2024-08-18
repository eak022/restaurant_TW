import api from "./api";
const RESTO_API = import.meta.env.VITE_RESTO_API;
console.log(RESTO_API);
//get all restaurants
const getAllrestaurant = async () => {
  return await api.get(RESTO_API);
};

const RestuarantService = {
  getAllrestaurant,
};
export default RestuarantService;