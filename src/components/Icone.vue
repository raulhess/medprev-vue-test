<template>
  <i :class="computedClass" :style="computedStyle" ></i>
</template>

<script>
export default {
  name: 'Icone',

  props: {
    nome: {
      type: String,
      default: '',
    },

    tamanho: {
      type: String,
      default: '12px',
    },
  },

  computed: {
    computedClass() {
      return `${this.nome}`;
    },
    computedStyle() {
      return `width: ${this.tamanho}; height: ${this.tamanho}; font-size: ${this.tamanho}; display: inline-block;`;
    },
  },
};
</script>

<style>

</style>
