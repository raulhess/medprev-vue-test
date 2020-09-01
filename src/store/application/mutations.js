/* eslint-disable no-underscore-dangle */
import Vue from 'vue';

export function ADD_PESSOA(state, data) {
  state.pessoas.push(data);
}

export function DELETE_PESSOA(state, data) {
  data._id = data.id;
  const foundIndex = state.pessoas.findIndex((item) => item._id === data._id);
  Vue.delete(state.pessoas, foundIndex);
}

export function SET_PESSOAS(state, data) {
  state.pessoas = data;
}

export function SET_STATUS(state, data) {
  state.status = data;
}

export function UPDATE_PESSOA(state, data) {
  data._id = data.id;
  const foundIndex = state.pessoas.findIndex((item) => item._id === data._id);
  Vue.set(state.pessoas, foundIndex, data);
}
