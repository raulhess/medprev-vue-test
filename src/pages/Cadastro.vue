<template>
  <div class="fit padding-md">
    <div class="view-container">
      <div class="bordas cantos-redondos fundo-branco padding-md">
          <div class="texto-titulo-1 padding-b-md">{{titulo}}</div>
          <form>
            <transition-group
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
              mode="out-in"
            >
              <!-- TIPO DE PESSOA -->
              <div
                :class="{ 'form-group--error has-error': $v.tipo.$error, 'form-group': true }"
                key="tipo"
              >
                <label class="form__label form-label">Tipo</label>
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
              <div
                :class="{ 'form-group--error has-error': $v.nome.$error, 'form-group': true }"
                key="nome"
              >
                <label class="form__label form-label">Nome</label>
                <input class="form-input" type="text" v-model.trim="$v.nome.$model">
                <div class="form-input-hint error" v-if="!$v.nome.required && $v.nome.$error">
                  Campo obrigatório
                </div>
              </div>

              <!-- RAZÃO SOCIAL -->
              <div
                v-if="tipo==='juridica'"
                :class="{
                  'form-group--error has-error': $v.razaoSocial.$error,
                  'form-group': true
                }"
                key="razaoSocial"
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

              <!-- CNPJ -->
              <div
                v-if="tipo==='juridica'"
                :class="{ 'form-group--error has-error': $v.cnpj.$error, 'form-group': true }"
                key="cnpj"
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

              <!-- CPF -->
              <div
                v-if="tipo==='fisica'"
                :class="{ 'form-group--error has-error': $v.cpf.$error, 'form-group': true }"
                key="cpf"
              >
                <label class="form__label form-label">CPF</label>
                <input
                  class="form-input"
                  v-mask="'###.###.###-##'"
                  type="text"
                  v-model.trim="$v.cpf.$model"
                >
                <div
                  class="form-input-hint error"
                  v-if="!$v.cpf.required && $v.cpf.$error"
                >
                  Campo obrigatório
                </div>
              </div>

              <!-- SEXO -->
              <div
                v-if="tipo==='fisica'"
                :class="{ 'form-group--error has-error': $v.sexo.$error, 'form-group': true }"
                key="sexo"
              >
                <label class="form__label form-label">Sexo</label>
                <select class="form-select" v-model.trim="$v.sexo.$model">
                  <option
                    v-for="(option) of optionsSexo"
                    :key="option.value" :value="option.value"
                  >
                    {{option.label}}
                  </option>
                </select>
                <div class="form-input-hint error" v-if="!$v.sexo.required && $v.sexo.$error">
                  Campo obrigatório
                </div>
              </div>

              <!-- DATA NASCIMENTO -->
              <div
                v-if="tipo==='fisica'"
                :class="{
                  'form-group--error has-error': $v.dataNascimento.$error,
                  'form-group': true }"
                key="dataNascimento"
              >
                <label class="form__label form-label">Data de nascimento</label>
                <input
                  class="form-input"
                  v-mask="'##/##/####'"
                  type="text"
                  v-model.trim="$v.dataNascimento.$model"
                >
                <div
                  class="form-input-hint error"
                  v-if="!$v.dataNascimento.required && $v.dataNascimento.$error"
                >
                  Campo obrigatório
                </div>
              </div>

              <!-- EMAIL -->
              <div
                class="form-group"
                key="email"
              >
                <label class="form-label">Email</label>
                <input class="form-input" type="email" v-model.trim="email">
              </div>

              <!-- TELEFONE -->
              <div
                class="form-group"
                key="telefone"
              >
                <label class="form-label">Telefone</label>
                <input
                  class="form-input"
                  v-mask="'(##) ####-####'"
                  type="telefone"
                  v-model.trim="telefone">
              </div>

              <!-- CELULAR -->
              <div
                class="form-group"
                key="celular"
              >
                <label class="form-label">Celular</label>
                <input
                  class="form-input"
                  v-mask="'(##) ####-####'"
                  type="celular"
                  v-model.trim="celular">
              </div>

              <!-- FOTO -->
              <div
                class="form-group"
                key="foto"
              >
                <label class="form-label">Foto</label>
                <input
                  class="form-input"
                  placeholder="URL da foto"
                  type="foto"
                  v-model.trim="foto">
              </div>

              <!-- ENDEREÇOS -->
              <!-- <div
                class="form-group"
                key="endereços"
              >
                <label class="form-label">Endereços</label>
                <div v-if="enderecos.length === 0" style="font-style: italic; color: #424242;">
                  Não há endereços cadastrados.
                </div>
                <div v-else class="padding-sm">
                  <div
                    v-for="(endereco,enderecoIndex) of enderecos"
                    :key="enderecoIndex"
                    class="bordas cantos-redondos padding-sm margin-b-sm"
                  >
                  </div>
                </div>
                <div class="padding-x-md texto-direita">
                  <button class="btn btn-primary" @click="addEndereco()">NOVO ENDEREÇO</button>
                </div>
              </div> -->

            </transition-group>
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
      cpf: '',
      sexo: '',
      dataNascimento: '',
      email: '',
      telefone: '',
      celular: '',
      foto: '',
      enderecos: [],
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
  methods: {
    addEndereco() {
      this.enderecos.push({
        endereço: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        CEP: '',
      });
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
    cpf: {
      required,
    },
    sexo: {
      required,
    },
    dataNascimento: {
      required,
    },
  },
};
</script>

<style>

</style>
