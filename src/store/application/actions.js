/* eslint-disable no-underscore-dangle */
import axios from 'axios';

export function deletePessoa({ commit, state }, data) {
  commit('SET_STATUS', 'carregando');
  return new Promise((resolve, reject) => {
    axios.delete(`${state.host}/${data._id}`, data).then((response) => {
      commit('DELETE_PESSOA', data);
      resolve(response);
    }).catch((error) => {
      reject(error);
    }).finally(() => {
      commit('SET_STATUS', 'ok');
    });
  });
}

export function editPessoa({ commit, state }, data) {
  commit('SET_STATUS', 'carregando');
  return new Promise((resolve, reject) => {
    axios.put(`${state.host}/${data.id}`, data).then((response) => {
      commit('UPDATE_PESSOA', data);
      resolve(response);
    }).catch((error) => {
      reject(error);
    }).finally(() => {
      commit('SET_STATUS', 'ok');
    });
  });
}

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
