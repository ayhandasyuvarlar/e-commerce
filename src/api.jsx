import axios from "axios";
const dataUrl = "http://localhost:5000";
axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = [dataUrl];
    const token = localStorage.getItem("access-token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
export const fetchProductList = async () => {
  const { data } = await axios.get("http://localhost:5000/product");
  return data;
};
export const fetchProductDetails = async (id) => {
  const { data } = await axios.get(`${dataUrl}/product/${id}`);
  return data;
};
export const fetchRegister = async (input) => {
  const dataUrl = "http://localhost:5000/auth/register";
  const { data } = await axios.post(dataUrl, input);
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${dataUrl}/auth/me`);
  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(`${dataUrl}/auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
};

export const fetchLogin = async (input) => {
  const { data } = await axios.post(`${dataUrl}/auth/login`, input);
  return data;
};

export const postOrder = async (input) => {
  const { data } = await axios.post(`${dataUrl}/order`, input);

  return data;
};

export const fetchOrders = async () => {
  const { data } = await axios.get(`${dataUrl}/order`);
  return data;
};
export const deletedOrder = async (productId) => {
  const { data } = await axios.delete(`${dataUrl}/product/${productId}`);
  return data;
};

export const updateProduct = async (input, product_id) => {
  const { data } = await axios.put(`${dataUrl}/product/${product_id}`, input);
  return data;
};
export const postProduct = async (input) => {
  const { data } = await axios.post(`${dataUrl}/product`, input);
  return data;
};
