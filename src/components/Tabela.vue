<template>
  <div class="bordas cantos-redondos fundo-branco" style="overflow:hidden;">
    <div class="texto-titulo-1 padding-md">Pessoas</div>
    <table style="width: 100%" >
      <th v-for="(col,colIndex) of colunas" :key="'th-'+colIndex">
        {{col.label}}
      </th>
      <th></th>
      <tr v-for="(data,dataIndex) of shownData" :key="'tr-'+dataIndex" class="active">
        <td v-for="(col,colIndex) of colunas" :key="'td-'+colIndex">
          {{getCol(data,col.nome)}}
        </td>
        <td>
          <button
            class="btn btn-action s-circle margin-r-sm"
            @click="edit(data)"
          >
            <i class="mdi mdi-pencil"></i>
          </button>
          <button
            class="btn btn-action s-circle"
            @click="remove(data)"
          >
            <i class="mdi mdi-delete"></i>
          </button>
        </td>
      </tr>
    </table>
    <div
      v-if="dados.length == 0"
      class="padding-md texto-centro"
      style="border-top: solid 1px #CECECE;"
    >
      Não há dados para o cadastro de pessoas ainda.
    </div>
    <div
      class="padding-md texto-direita"
      style="border-top: solid 1px #CECECE; user-select: none;"
    >
      <button
        class="btn btn-action s-circle"
        style="border:none;"
        :disabled="!canGoPrevious"
        @click="previous()"
      >
        <i class="mdi mdi-chevron-left"></i>
      </button>
      <span class="padding-x-md">Página {{currentPage}} de {{maxPages}}</span>
      <button
        class="btn btn-action s-circle"
        style="border:none;"
        :disabled="!canGoNext"
        @click="next()"
      >
        <i class="mdi mdi-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabela',

  data() {
    return {
      currentPage: 1,
    };
  },

  computed: {
    canGoNext() {
      return this.currentPage < this.maxPages;
    },
    canGoPrevious() {
      return this.currentPage > 1;
    },
    maxPages() {
      if (this.dados.length === 0) return 1;
      return Math.ceil((this.dados.length / this.paginacao), 10);
    },
    shownData() {
      const initialIndex = (this.currentPage - 1) * this.paginacao;
      return this.dados.slice(initialIndex, initialIndex + this.paginacao);
    },
  },

  props: {
    colunas: {
      type: Array,
      default: () => [],
    },
    dados: {
      type: Array,
      default: () => [],
    },
    edit: {
      type: Function,
      default: () => () => {},
    },
    remove: {
      type: Function,
      default: () => () => {},
    },
    paginacao: {
      type: Number,
      default: 5,
    },
  },

  methods: {
    getCol(data, colName) {
      if (data[colName]) return data[colName];
      return '';
    },
    next() {
      if (this.canGoNext) {
        this.currentPage += 1;
      }
    },
    previous() {
      if (this.canGoPrevious) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}

table, th, td {
  padding: 8px;
  user-select: none;
}

th {
  font-size:11px;
  padding: 16px;
}

tr {
  border-top: solid 1px #CECECE;
  transition: background-color 0.5s;
}

tr:hover {
  cursor: pointer;
  background-color: #ececec;
}

td {
  color: #424242;
  text-align: center;
}

</style>
