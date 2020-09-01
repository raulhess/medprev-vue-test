<template>
<div class="app-container fundo-cinza-1">
  <!-- <header>
    <section>
      <icone :nome="icone" tamanho="18px"/>
      {{titulo}}
    </section>
  </header> -->
  <header class="navbar padding-sm padding-x-md ">
  <section class="navbar-section">
    <a href="#" class="navbar-brand mr-2 texto-negrito">
      <icone :nome="icone" tamanho="18px" class="texto-primario"/>
    </a>
    <a href="#" class="navbar-brand mr-2 texto-negrito">{{titulo}}</a>
  </section>
  </header>
  <div class="page-container">
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
