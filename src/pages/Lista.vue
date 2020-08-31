<template>
  <div class="fit padding-md">
    <div style="max-width: 1000px; margin: 0px auto;">
      <tabela :colunas="colunas" :dados="pessoas"  />
      <div class="texto-direita padding-y-md">
        <button class="btn btn-primary" @click="addPerson()">ADICIONAR PESSOA</button>
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

  methods: {
    addPerson() {
      // this.$axios.post(this.host, { nome: 'Raul', email: 'raul.hess@gmail.com' },
      // { 'Content-Type': 'application/json' });
    },
  },
};
</script>

<style>

</style>
