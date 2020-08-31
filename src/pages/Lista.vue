<template>
  <div class="fit padding-md">
    <div class="view-container">
      <tabela :colunas="colunas" :dados="pessoas"  />
      <div class="texto-direita padding-y-md">
        <button
          class="btn btn-primary"
          @click="$router.push({ name: 'cadastro', params: {} })"
        >
          ADICIONAR PESSOA
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tabela from 'components/Tabela';

export default {
  data() {
    return {
      colunas: [
        { nome: 'nome', label: 'Nome' },
        { nome: 'email', label: 'Email' },
      ],
    };
  },

  computed: {
    ...mapState('app', ['host', 'pessoas']),
  },

  components: {
    Tabela,
  },

  created() {
    this.$store.dispatch('app/loadPessoas');
  },
};
</script>

<style>

</style>
