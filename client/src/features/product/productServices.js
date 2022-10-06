import axios from "axios";

// backend url
const URL = "http://localhost:8000";

const fetchProducts = async () => {
  const response = await axios.get(`${URL}/products`);

  if (response.data) {
    return response.data;
  }
};

const productServices = {
  fetchProducts,
};

export default productServices;
