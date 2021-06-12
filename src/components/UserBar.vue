<template>
  <div class="container chat-window">

    <div class="content chat-input-area" ref="chat-text-area">
      <div v-if="tab === TAB_PESSOAS" >
        <table class="table table-striped table-dark">
          <thead>
          <tr>
            <th scope="col" colspan="4">TUTORES</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="t in tutores">
            <td>{{ t.nome }}</td>
          </tr>
          </tbody>
        </table>

        <table class="table table-striped table-dark">
          <thead>
          <tr>
            <th scope="col" colspan="3">ALUNOS</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="p in pessoas">
            <td>{{ p.nome }}</td>
            <td>{{ p.pontos }}</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button class="btn btn-primary align-self-end list-button" v-if="isTutor()" @click="incPontos(p, 10)" >+10 pts</button>
                <button class="btn btn-warning align-self-end list-button" v-if="isTutor()" @click="incPontos(p, -100)" >-100 pts</button>
                <button class="btn btn-danger align-self-end list-button" v-if="isTutor()" @click="reprovar(p)" >REPROVAR</button>
              </div>
            </td>
          </tr>

          </tbody>
        </table>


      </div>

      <div v-else class="row">
        <div class="row">
          <div v-for="m in messages" class="row">
            <div class="badge col-sm-6 col-md-6 col-lg-4">{{usuario_atual.nome}}</div>
            {{m}}
          </div>
        </div>

      </div>
    </div>


    <div class="row chat-input-group" v-if="tab === TAB_CHAT">
      <input id="chat-text" class="col-8 chat-input" type="text" v-model="message" @keyup.enter="sendMessage">
      <button type="button" class="col-2 btn btn-primary" @click="sendMessage"><i class="bi bi-arrow-right-short"></i></button>
    </div>

    <div class="btn-group tabs">
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
        new Usuario("Pedro", TIPO_PESSOA.ALUNO),
        new Usuario("Pedrinho", TIPO_PESSOA.ALUNO),
        new Usuario("Pedrota", TIPO_PESSOA.ALUNO),
      ],
    }
  },
  mounted() {
    for (let i = 0; i < 100; i++)
      this.messages.push(`mensagem ${i}`);
  },
  updated() {
    const chat = this.$refs["chat-text-area"]
    if (chat && this.tab === this.TAB_CHAT) {
      this.$refs["chat-text-area"].scrollTop = this.$refs["chat-text-area"].scrollHeight;
      console.log("deveria ter scrollado")
    }
  },
  methods: {
    changeTab(t) {
      this.tab = t;
    },
    sendMessage() {
      if (this.message.trim()) {
        this.messages.push(this.message);
        this.message = "";
      }
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
  .tabs {

  }
  .chat-input-group {
    height: 5%;
    margin: 20px 0;
  }
  .chat-window {
    background: #2c3e50;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .chat-input-area {
    background: #243342;
    width: 100%;

    height: 80%;
    overflow: auto;
    display: block;
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