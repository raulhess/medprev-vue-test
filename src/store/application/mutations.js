export function ADD_PESSOA(state, data) {
  state.pessoas.push(data);
}

export function SET_PESSOAS(state, data) {
  state.pessoas = data;
}

export function SET_STATUS(state, data) {
  state.status = data;
}
