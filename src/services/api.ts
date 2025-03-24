import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Products
  getProducts: async (params?: { category?: string; search?: string }) => {
    const response = await axios.get(`${API_URL}/products`, { params });
    return response.data;
  },

  getProduct: async (id: string) => {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  },

  // Categories
  getCategories: async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  },

  // Orders
  createOrder: async (orderData: any) => {
    const response = await axios.post(`${API_URL}/orders`, orderData);
    return response.data;
  }
};