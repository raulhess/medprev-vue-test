<template>
<div class="app-container fundo-cinza-1">
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
    mode="out-in"
  >
    <carregando v-show="status === 'carregando'" />
  </transition>
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
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
  </div>
</template>

<script>
import Carregando from 'components/Carregando';
import Icone from 'components/Icone';
import { mapState } from 'vuex';

export default {
  name: 'MainLayout',
  data() {
    return {

    };
  },

  computed: {
    ...mapState('app', ['status']),
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
    Carregando, Icone,
  },
};
</script>
