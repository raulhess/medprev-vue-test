<template>
  <div class="fit padding-md">
    <div class="view-container">
      <div class="texto-direita padding-y-md">
        <button
          class="btn btn-link"
          @click="$router.push({ name: 'lista', params: {} })"
          >
            VOLTAR
          </button>
        <button class="btn btn-primary">ADICIONAR</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
