<template>
<div class="app-container">
  <header>
    <section>
      <icone :nome="icone" tamanho="18px"/>
      {{titulo}}
    </section>
  </header>
  <div class="page-container fundo-cinza-1">
    <router-view />
  </div>
  </div>
</template>

<script>
import Icone from 'components/Icone';

export default {
  name: 'MainLayout',
  data() {
    return {

    };
  },

  computed: {
    icone() {
      // TODO trazer título da store
      return 'mdi mdi-home';
    },
    titulo() {
      // TODO trazer título da store
      return 'MedPrev Vue Test';
    },
  },

  components: {
    Icone,
  },
};
</script>
