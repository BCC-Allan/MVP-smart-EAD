<template>
  <div class="container chat-window">

    <div v-if="tab === TAB_PESSOAS" class="row chat-input-area col-xs-5 col-md-3">
      <div class="row d-flex align-self-end">
        TUTORES
      </div>
      <div class="row" v-for="t in tutores">
        <div class="col-8">
          {{t.nome}}
        </div>
        <div class="col-4"></div>
      </div>
      <div class="row d-flex align-self-end">
        ALUNOS
      </div>
      <div class="row" style="margin: auto" v-for="p in pessoas">
        <div class="col-8" >
          {{p.nome}}
          <span class="badge badge-secondary">{{p.pontos}}</span>
        </div>
        <div class="col-1">
          <button class="btn btn-primary align-self-end list-button" v-if="isTutor()" @click="incPontos(p, 10)" >+10 pts</button>
        </div>
        <div class="col-1">
          <button class="btn btn-warning align-self-end list-button" v-if="isTutor()" @click="incPontos(p, -100)" >-100 pts</button>
        </div>
        <div class="col-2">
          <button class="btn btn-danger align-self-end list-button" v-if="isTutor()" @click="reprovar(p)" >REPROVAR</button>
        </div>
      </div>
    </div>

    <div v-if="tab === TAB_CHAT" class="row chat-input-area col-xs-5 col-md-3">
      <div class="row">
        <div v-for="m in messages" class="row">
          {{m}}
        </div>
      </div>
      <div class="row">
        <label for="chat-text" class="col-1 chat-input-label form-label align-middle">Digite: </label>
        <input id="chat-text" class="col-10 chat-input" type="text" v-model="message" @keyup.enter="sendMessage">
        <button type="button" class="col-1 btn btn-primary" @click="sendMessage">Enviar</button>
      </div>
    </div>

    <div class="btn-group">
      <a href="#" class="btn btn-primary" v-bind:class="{active: tab === TAB_CHAT}" aria-current="page" @click="changeTab(TAB_CHAT)">Chat</a>
      <a href="#" class="btn btn-primary" v-bind:class="{active: tab === TAB_PESSOAS}" @click="changeTab(TAB_PESSOAS)">Lista pessoas</a>
    </div>

  </div>
</template>

<script>
const TAB_CHAT = 0;
const TAB_PESSOAS = 1;
const TIPO_PESSOA = {
  ALUNO: 0,
  PROFESSOR: 1
}

let nid = 1;

class Usuario {
  constructor(nome, tipo) {
    this.id = nid++;
    this.nome = nome;
    this.tipo = tipo;
    this.pontos = 0;
  }
}

export default {
  data () {
    return {
      tab: TAB_CHAT,
      TAB_PESSOAS: TAB_PESSOAS,
      TAB_CHAT: TAB_CHAT,
      TIPO_PESSOA: TIPO_PESSOA,
      messages: [],
      message: "",
      usuario_atual: new Usuario("Roberto", TIPO_PESSOA.PROFESSOR),
      tutores: [
        new Usuario("Mr. Robot", TIPO_PESSOA.PROFESSOR)
      ],
      pessoas: [
        new Usuario("Paulo", TIPO_PESSOA.ALUNO),
        new Usuario("Paulão", TIPO_PESSOA.ALUNO),
        new Usuario("Paulinho", TIPO_PESSOA.ALUNO),
        new Usuario("Jão", TIPO_PESSOA.ALUNO),
        new Usuario("João", TIPO_PESSOA.ALUNO),
        new Usuario("Joãozinho", TIPO_PESSOA.ALUNO),
      ],
    }
  },
  methods: {
    changeTab(t) {
      this.tab = t;
    },
    sendMessage() {
      this.messages.push(this.message);
      this.message = "";
    },
    isTutor() {
      return this.usuario_atual.tipo === this.TIPO_PESSOA.PROFESSOR;
    },
    incPontos(p, score) {
      p.pontos+= score;
    },
    reprovar(p) {

      this.pessoas = this.pessoas.filter((item) => p.id !== item.id )
    }
  }
}

// export default {
//   TAB_CHAT: TAB_CHAT,
//   TAB_PESSOAS: TAB_PESSOAS,
//   name: "UserBar",
//   tab: TAB_CHAT,
// }

function changeTab(t) {
  console.log("chamou")
  this.tab = t;
}

</script>

<style scoped>
  .chat-window {
    background: #2c3e50;

  }
  .chat-input-area {
    background: darkblue;
    width: 100%;
    margin: 0;
  }

  .chat-input-label {
    height: auto;
  }
  .chat-input {
    height: auto;
  }

  .list-button {
    width: 100%;
    white-space: nowrap;
  }
</style>