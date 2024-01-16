<template>
    <div class="card text-bg-dark m-2">
        <h5 class="card-header text-center">Solicitar turno</h5>
        <div class="card-body">
            
            <div v-if="!showForm">
                <div class="mb-3">
                    <label for="document_type" class="form-label">Tipo de documento</label>
                    <select class="form-select" aria-label="Default select example" id="document_type" v-model="turnos.document_type">
                        <option value="1">Cédula de ciudadanía</option>
                        <option value="2">Cédula de extranjería</option>
                        <option value="3">Tarjeta de identidad</option>
                        <option value="3">Otros</option>
                    </select>
                </div>
        
                <div class="mb-3">
                    <label for="document_number" class="form-label">Número de documento</label>
                    <input type="number" class="form-control" id="document_number"  v-model="turnos.document_number" placeholder="Ingresa el número de identificación del cliente">
                </div>

                <div class="mb-3 text-center">
                    <button type="button" class="btn btn-warning" @click="getTurnos">Consultar</button>
                </div>
            </div>
        
            <div  v-if="showForm" class="row">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="turnos.name" placeholder="Ingresa el nombre del cliente">
                    </div>
        
                    <div class="mb-3">
                        <label for="lastname" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="lastname" v-model="turnos.lastname" placeholder="Ingresa el apellido del cliente">
                    </div>
        
                    <div class="mb-3">
                        <label for="cellphone" class="form-label">Celular</label>
                        <input type="text" class="form-control" id="cellphone" v-model="turnos.cellphone" placeholder="Ingresa el número de celular del cliente">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="email" v-model="turnos.email" placeholder="Ingresa el correo del cliente">
                    </div>
        
                    <div class="mb-3">
                        <label for="date" class="form-label">Fecha del turno</label>
                        <input type="date" class="form-control" id="date" v-model="turnos.date">
                    </div>
        
                    <div class="mb-3">
                        <label for="time" class="form-label">Hora del turno</label>
                        <select class="form-select" aria-label="Default select example" id="time" v-model="turnos.time">
                            <option value="17:00 PM">17:00 PM</option>
                            <option value="14:25 PM">14:25 PM</option>
                            <option value="08:30 AM">08:30 AM</option>
                            <option value="10:40 AM">10:40 AM</option>
                        </select>
                    </div> 
        
                    <div class="mb-3">
                        <label for="barber_name" class="form-label">Barbero</label>
                        <select class="form-select" aria-label="Default select example" id="barber_name" v-model="turnos.barber_name">
                            <option selected>Selecciona el barbero que deseas que te atienda</option>
                            <option value="1">Barbero 1</option>
                            <option value="2">Barbero 2</option>
                            <option value="3">Barbero 3</option>
                            <option value="3">Barbero 4</option>
                        </select>
                    </div>
                </div>
                <div class="mb-3 text-center">
                    <button type="button" class="btn btn-warning" @click="save">Guardar</button>
                </div>
            </div>
            <turnos-modal :asignedTurnos="asignedTurnos" @edit-turno="editTurno"></turnos-modal>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import TurnosModal from '@/Pages/Views/Turnos/Components/TurnosModal.vue'

export default{
    name: 'TurnosComponent',
    data(){
        return{
            turnos:{
                document_type: '',
                document_number: '',
                name: '',
                lastname: '',
                cellphone: '',
                email: '',
                date: '',
                time: '',
                barber_name: ''
            },
            asignedTurnos: [],
            showForm: false
        }
    },
    components:{
        TurnosModal
    },
    methods:{
        save(){
            axios.post(`/Turnos/save`, this.turnos)
            .then(res=>{
                if(res.data.saved){
                    alert('Turno asignado correctamente')
                }else{
                    alert('Ha ocurrido un error, intente de nuevo')
                }
            }).catch(err=>{
                console.error(err)
            })
        },

        getTurnos(){
            const myModal = new bootstrap.Modal('#turnos-modal', {
                keyboard: false
            })

            axios.get(`/Turnos/getTurnos/${this.turnos.document_type}/${this.turnos.document_number}`)
            .then(res=>{
                this.asignedTurnos = res.data.turnos;
                
                if (this.asignedTurnos.some((turno) => turno.state === 'asignado')) {
                    this.showForm = false;
                    alert('Ya hay un turno asignado. No se puede asignar otro turno.');
                } else {
                    this.showForm = true;
                }

                myModal.show()
            })
            .catch(err=>{
                console.error(err)
            })
        },

        editTurno(turno) {
            this.showForm = true;
            this.turnos = {
                document_type: turno.document_type,
                document_number: turno.document_number,
                name: turno.name,
                lastname: turno.lastname,
                cellphone: turno.cellphone,
                email: turno.email,
                date: turno.date,
                time: turno.time,
                barber_name: turno.barber_name
            };

            axios.post(`/Turnos/update/${this.turnos.id}`)
            .then(res=>{
                if(res.data.saved){
                    alert('Turno actualizado correctamente')
                }
            })
            .catch(err=>{
                console.error(err)
            });
        }
    }
}
</script>