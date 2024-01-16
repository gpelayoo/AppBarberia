<template>
    <div class="modal" tabindex="-1" id="turnos-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-dark">
              <h5 class="modal-title">Turnos del cliente</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-dark">
                <ul v-if="asignedTurnos.length > 0">
                    <li v-for="turno in asignedTurnos" :key="turno.id">
                      <p>Fecha del turno: {{ turno.date }}</p> 
                      <br>
                      <p>Hora del turno {{ turno.time }} </p>
                      <br>
                      <p>Estado del turno {{ turno.state }} </p>
                      <button class="btn btn-primary" @click="editTurno(turno)">Editar Turno</button>
                    </li>
                </ul>
                <div v-else>
                    <p>No hay turnos asignados para este cliente.</p>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    props: ['asignedTurnos'],
    methods:{
      editTurno(turno) {
        this.$emit('edit-turno', turno);
      }
    }
  };
</script>
  