import axios from 'axios';

export function loadPessoas({ commit, state }) {
  return new Promise((resolve, reject) => {
    axios.get(`${state.host}`).then((response) => {
      commit('SET_PESSOAS', response.data);
      resolve(response);
    }).catch((error) => {
      reject(error);
    });
  });
}
