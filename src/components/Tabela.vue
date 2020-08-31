<template>
  <table :style="style">
    <th v-for="(col,colIndex) of colunas" :key="'th-'+colIndex">
      {{col.label}}
    </th>
    <tr v-for="(data,dataIndex) of dados" :key="'tr-'+dataIndex">
      <td v-for="(col,colIndex) of colunas" :key="'td-'+colIndex">
        {{getCol(data,col.nome)}}
      </td>
    </tr>
  </table>
</template>

<script>
export default {
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

  computed: {
    style() {
      return ['width: 100%'];
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

<style>

</style>
