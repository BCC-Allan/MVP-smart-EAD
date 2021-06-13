<template>
  <div id="game-modal" class="modal fade " tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar para a aula</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameModal',
  props: {
    title: String,
  }
}
</script>

<style scoped>

#game-modal {
  color: black;
}

.modal {
  text-align: center;
}

.modal-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>
