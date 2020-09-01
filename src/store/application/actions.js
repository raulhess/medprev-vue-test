import axios from 'axios';

export function insertPessoa({ commit, state }, data) {
  commit('SET_STATUS', 'carregando');
  return new Promise((resolve, reject) => {
    axios.post(`${state.host}`, data).then((response) => {
      commit('ADD_PESSOA', response.data);
      resolve(response);
    }).catch((error) => {
      reject(error);
    }).finally(() => {
      commit('SET_STATUS', 'ok');
    });
  });
}

export function loadPessoas({ commit, state }) {
  commit('SET_STATUS', 'carregando');
  return new Promise((resolve, reject) => {
    axios.get(`${state.host}`).then((response) => {
      commit('SET_PESSOAS', response.data);
      resolve(response);
    }).catch((error) => {
      reject(error);
    }).finally(() => {
      commit('SET_STATUS', 'ok');
    });
  });
}
