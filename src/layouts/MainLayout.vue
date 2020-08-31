<template>
<div class="app-container">
  <div class="app-header">
    <icone :nome="icone" tamanho="18px"/>
    {{titulo}}
  </div>
  <router-view />
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
