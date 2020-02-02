
import axios from 'axios'

export default {
    getPeoples(options) {
      const params = {
        page: options.page,
        search: options.search
      }
      return axios.get(`https://swapi.co/api/people/`, { params })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      })
    },
    getPeople(options) {
      return axios.get(`https://swapi.co/api/people/${options.id}`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      })
    },
}
