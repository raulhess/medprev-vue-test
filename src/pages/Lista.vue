<template>
  <div >
    <tabela :colunas="colunas" :dados="dados" />
  </div>
</template>

<script>
import Tabela from 'components/Tabela';

export default {
  data() {
    return {
      colunas: [
        { nome: 'nome', label: 'Nome' },
        { nome: 'email', label: 'Email' },
      ],
      dados: [
        { nome: 'Raul Correa Hess', email: 'raul.hess@gmail.com' },
        { nome: 'Carlos Alberto Hess', email: 'carlos.hess@gmail.com' },
      ],
    };
  },
  components: {
    Tabela,
  },
};
</script>

<style>

</style>
