<template>
  <div class="fit padding-md">
    <div class="view-container">
      <tabela
        :colunas="colunas"
        :dados="pessoas"
        :edit="editar"
        :remove="remover"
      />
      <div class="texto-direita padding-y-md">
        <button
          class="btn btn-primary"
          @click="$router.push({ name: 'cadastro', params: {} })"
        >
          ADICIONAR PESSOA
        </button>
      </div>
      <div :class="`modal ${modalDelete ? 'active' : ''}`" id="modal-id">
        <a href="#" @click="modalDelete = false" class="modal-overlay" aria-label="Close"></a>
        <div class="modal-container">
          <div class="modal-header">
            <a
              href="#"
              @click="modalDelete = false"
              class="btn btn-clear float-right"
              aria-label="Close"
            >
            </a>
            <div class="modal-title h5">Atenção</div>
          </div>
          <div class="modal-body">
            <div class="content">
              Deseja realmente excluir a pessoa: "{{this.toDelete.nome}}"
            </div>
          </div>
          <div class="modal-footer">
        <button
          class="btn btn-link margin-x-md"
          @click="modalDelete = false"
        >
          CANCELAR
        </button>
        <button
          @click="deleteRecord()"
          :class="`btn btn-primary `"
        >
          EXCLUIR
        </button>
          </div>
        </div>
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
      modalDelete: false,
      toDelete: {},
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
    deleteRecord() {
      this.$store.dispatch('app/deletePessoa', this.toDelete);
      this.toDelete = {};
      this.modalDelete = false;
    },
    editar(record) {
      this.$router.push({ name: 'cadastro', params: { record } });
    },
    remover(record) {
      this.toDelete = record;
      this.modalDelete = true;
    },
  },
};
</script>

<style>

</style>
