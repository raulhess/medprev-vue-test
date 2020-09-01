<template>
  <div class="fit padding-md">
    <div class="view-container">
      <div class="bordas cantos-redondos fundo-branco padding-md">
          <div class="texto-titulo-1 padding-b-md">{{titulo}}</div>
          <form>
            <!-- TIPO DE PESSOA -->
            <div :class="{ 'form-group--error has-error': $v.tipo.$error, 'form-group': true }">
              <label class="form__label form-label">Tipo</label>
              <!-- <input class="form__input form-input" v-model.trim="$v.tipo.$model"/> -->
              <select class="form-select" v-model.trim="$v.tipo.$model">
                <option
                  v-for="(option) of optionsTipo"
                  :key="option.value" :value="option.value"
                >
                  {{option.label}}
                </option>
              </select>
              <div class="form-input-hint error" v-if="!$v.tipo.required && $v.tipo.$error">
                Campo obrigatório
              </div>
            </div>

            <!-- NOME -->
            <div :class="{ 'form-group--error has-error': $v.nome.$error, 'form-group': true }">
              <label class="form__label form-label">Nome</label>
              <input class="form-input" type="text" v-model.trim="$v.nome.$model">
              <div class="form-input-hint error" v-if="!$v.nome.required && $v.nome.$error">
                Campo obrigatório
              </div>
            </div>

            <!-- RAZÃO SOCIAL -->
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in"
            >
              <div
                v-if="tipo==='juridica'"
                :class="{
                  'form-group--error has-error': $v.razaoSocial.$error,
                  'form-group': true
                }"
              >
                <label class="form__label form-label">Razão social</label>
                <input class="form-input" type="text" v-model.trim="$v.razaoSocial.$model">
                <div
                  class="form-input-hint error"
                  v-if="!$v.razaoSocial.required && $v.razaoSocial.$error"
                >
                  Campo obrigatório
                </div>
              </div>
            </transition>

            <!-- CNPJ -->
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in"
            >
              <div
                v-if="tipo==='juridica'"
                :class="{ 'form-group--error has-error': $v.cnpj.$error, 'form-group': true }"
              >
                <label class="form__label form-label">CNPJ</label>
                <input
                  class="form-input"
                  v-mask="'##.###.###/####-##'"
                  type="text"
                  v-model.trim="$v.cnpj.$model"
                >
                <div
                  class="form-input-hint error"
                  v-if="!$v.cnpj.required && $v.cnpj.$error"
                >
                  Campo obrigatório
                </div>
              </div>
            </transition>

          </form>
      </div>
      <div class="texto-direita padding-y-md">
        <button
          class="btn btn-link margin-x-md"
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
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { VueMaskDirective } from 'v-mask';

Vue.directive('mask', VueMaskDirective);
Vue.use(Vuelidate);

export default {
  data() {
    return {
      tipo: '',
      nome: '',
      razaoSocial: '',
      cnpj: '',
      optionsSexo: [
        { value: 'm', label: 'Masculino' },
        { value: 'f', label: 'Feminino' },
        { value: 'o', label: 'Outro' },
      ],
      optionsTipo: [
        { value: 'fisica', label: 'Pessoa física' },
        { value: 'juridica', label: 'Pessoa jurídica' },
      ],
    };
  },
  computed: {
    titulo() {
      return 'Nova Pessoa';
    },
  },
  validations: {
    tipo: {
      required,
    },
    nome: {
      required,
    },
    razaoSocial: {
      required,
    },
    cnpj: {
      required,
    },
  },
};
</script>

<style>

</style>
