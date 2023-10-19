import axios from 'axios'
// import { users } from './users'

const apiUrl = 'https://test-tech-api.osc-fr1.scalingo.io/api/'

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
};

export default apiService