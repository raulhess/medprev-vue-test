<template>
  <div class="bordas cantos-redondos fundo-branco" style="overflow:hidden;">
    <div class="texto-titulo-1 padding-md">Pessoas</div>
    <table style="width: 100%">
      <th v-for="(col,colIndex) of colunas" :key="'th-'+colIndex">
        {{col.label}}
      </th>
      <tr v-for="(data,dataIndex) of dados" :key="'tr-'+dataIndex">
        <td v-for="(col,colIndex) of colunas" :key="'td-'+colIndex">
          {{getCol(data,col.nome)}}
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
  </div>
</template>

<script>
export default {
  name: 'Tabela',

  props: {
    colunas: {
      type: Array,
      default: () => [],
    },
    dados: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getCol(data, colName) {
      if (data[colName]) return data[colName];
      return '';
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
}

td {
  color: #424242;
}

</style>
