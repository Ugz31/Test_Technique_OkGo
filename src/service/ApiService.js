import axios from 'axios';

const apiUrl = 'https://test-tech-api.osc-fr1.scalingo.io/api/';

const apiService = {
  getUsers: async () => {
    try {
      const { data } = await axios.get(apiUrl + 'user');
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  getUserById: async (id) => {
    try {
      const { data } = await axios.get(apiUrl + 'user/' + id);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
  postUser: async (user) => {
    try {
      const { data } = await axios.post(apiUrl + 'user', user);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default apiService;
