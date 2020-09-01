
# MedPrev Front-end Vue Test

  

Segue uma breve documentação sobre o teste de frontend vue para a MedPrev.

  

## Arquitetura

  

Para desenvolver este teste de frontend utilizei a arquitetura do framework [Quasar](https://quasar.dev/). Mas, para que não haja dúvida, deixarei bem explícito o que usei e o que não usei do framework:

  

#### O que foi utilizado do Quasar

- Arquitetura Vue, usando o pacote [vue-cli](https://cli.vuejs.org/)

- Arquitetura [Vuex](https://vuex.vuejs.org/)

- Arquitetura [vue-router](https://router.vuejs.org/)

- Instalação do [Sass](https://sass-lang.com/)

- Instalação do [ESLint](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) com a configuração airbnb

- Instalação do [animate.css](https://animate.style/)

- Importação dos ícones do [Material Design Icons](https://materialdesignicons.com/)

  

#### O que foi NÃO foi utilizado do Quasar

- Componentes prontos. Nenhum componente pronto do framework foi utilizado nesse projeto.

- Nenhuma classe pronta nem variável de Scss pronta foi utilizada nesse projeto.

  

## Componentes do Projeto

Segue uma lista com os principais componentes do projeto base.

  

- [/src/layouts/MainLayout.vue](https://github.com/raulhess/medprev-vue-test/blob/master/src/layouts/MainLayout.vue)

- Arquivo com o layout do site. Ele controla o design global e a parte de carregamento.

- [/src/pages/Lista.vue](https://github.com/raulhess/medprev-vue-test/blob/master/src/pages/Lista.vue)

- Página principal. Ela carrega os objetos a primeira vez que é exibida e renderiza no componente de tabela.

- [/src/pages/Cadastro.vue](https://github.com/raulhess/medprev-vue-test/blob/master/src/pages/Cadastro.vue)

- Página de cadastro. Nela é possível inserir ou editar uma pessoa, dependendo do caminho feito para chegar nela. Caso venha do botão "adicionar" ou do botão "editar".

- [/src/components/Carregando.js](https://github.com/raulhess/medprev-vue-test/blob/master/src/components/Carregando.vue)

- Componente que exibe uma cortina de carregamento. É controlado no MainLayout.

- [/src/components/Icone](https://github.com/raulhess/medprev-vue-test/blob/master/src/components/Icone.vue)

- Componente que controla ícones.

- [/src/components/Tabela](https://github.com/raulhess/medprev-vue-test/blob/master/src/components/Tabela.vue)

- Componente que controla uma tabela. Recebe como parâmetro os dados e as definições das colunas. Gerencia a própria paginação. Recebe como parâmetro as funções para editar e excluir um registro.

 - [/src/css/app.scss](https://github.com/raulhess/medprev-vue-test/blob/master/src/css/app.scss)

- Scss global do site.

 - [/src/store/application]( https://github.com/raulhess/medprev-vue-test/tree/master/src/store/application)

- Pasta com o módulo da vuex store que gerencia a aplicação.



## Guia de Instalação


Para fazer este projeto funcionar, basta instalar as dependências dele após o download:

  

```bash

npm install

```

  

Depois utilizar o comando a seguir para rodar localmente:

  

```bash

quasar dev

```

  

Ou caso queira gerar uma versão para deploy:

```bash

quasar build

```

## Notas finais
Este projeto foi uma ótima experiência, nunca havia utilizado *vuelidate*, *spectre.css* dentre outras tecnologias. Porém devido ao tempo ficou faltando o gerenciamento de endereços do usuário, para validá-los seria necessário usar o *vuelidate* para objetos agrupados. Gostaria também de ter feito um componente para gerenciar campos de formulário, porém também devido ao tempo não foi possível. Porém obrigado pela oportunidade, já foi um grande aprendizado!