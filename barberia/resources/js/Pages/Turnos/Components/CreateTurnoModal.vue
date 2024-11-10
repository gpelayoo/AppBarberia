<script>
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.css';

export default {
    data() {
        return {
            document_number: '',
            name: '',
            lastname: '',
            cellphone: '',
            email: '',
            date: '',
            time: '',
            barber_name: '',
            service_name: '',
            barbers: [],
            clients: []
        };
    },
    created() {
        axios.get('/usuarios/getBarbers')
            .then(response => {
                this.barbers = response.data.map(barber => ({
                    label: barber.name,
                    value: barber.id,
                    ...barber
                }));
                this.checkInitializeChoices();
            })
            .catch(error => {
                console.error("Error al cargar los barberos:", error);
            });

        axios.get('/clients/getClients')
            .then(response => {
                this.clients = response.data.map(client => ({
                    label: client.document_number,
                    value: client.document_number,
                    ...client
                }));
                this.checkInitializeChoices();
            })
            .catch(error => {
                console.error("Error al cargar los clientes:", error);
            });
    },
    watch: {
        document_number(newVal) {
            const selectedClient = this.clients.find(client => client.document_number === newVal);
            if (selectedClient) {
                this.name = selectedClient.name;
                this.lastname = selectedClient.lastname;
                this.cellphone = selectedClient.cellphone;
                this.email = selectedClient.email;
            }
        }
    },
    methods: {

        checkInitializeChoices() {
            if (this.barbers.length > 0 && this.clients.length > 0) {
                this.$nextTick(() => {
                    this.initializeChoices();
                });
            }
        },

        initializeChoices() {
            const selectElement = document.getElementById('document_number');
            if (selectElement) { 
                new Choices(selectElement, {
                    searchEnabled: true,
                    itemSelectText: '',
                    removeItemButton: true,
                    placeholder: true,
                    placeholderValue: 'Selecciona un documento'
                });
            }

            const barberNameSelect = document.getElementById('barber_name');
            if (barberNameSelect) { 
                new Choices(barberNameSelect, {
                    searchEnabled: true,
                    itemSelectText: '',
                    removeItemButton: true,
                    placeholder: true,
                    placeholderValue: 'Selecciona un barbero'
                });
            }
        },
        
        async storeTurno() {
            try {
                const response = await axios.post(route('turnos.store'), {
                    document_type: this.document_type,
                    document_number: this.document_number,
                    name: this.name,
                    lastname: this.lastname,
                    cellphone: this.cellphone,
                    email: this.email,
                    date: this.date,
                    time: this.time,
                    barber_name: this.barber_name,
                    service_name: this.service_name
                });

                alert('Turno creado correctamente');
                Inertia.get(route('turnos')); 
            
            } catch (error) {
                console.error(error);
                alert('Hubo un problema al crear el turno');
            }
        }
    }
};
</script>

<template>
    <div
        class="modal fade"
        id="createTurnoModal"
        tabindex="-1"
        aria-labelledby="createTurnoModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createTurnoModalLabel">Asignar Turno</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="storeTurno">
                        <div class="mb-3">
                            <label for="document_number" class="block text-sm font-medium text-gray-700">Documento</label>
                            <select 
                                id="document_number"
                                v-model="document_number"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="" disabled selected>Selecciona un documento</option>
                                <option v-for="client in clients" :key="client.value" :value="client.document_number">
                                    {{ client.document_number }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                            <input 
                                type="text" 
                                id="name" 
                                v-model="name" 
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                disabled
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Apellido</label>
                            <input
                                type="text"
                                class="form-control"
                                id="lastname"
                                v-model="lastname"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Celular</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cellphone"
                                v-model="cellphone"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                v-model="email"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Fecha</label>
                            <input
                                type="date"
                                class="form-control"
                                id="date"
                                v-model="date"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Hora</label>
                            <input
                                type="time"
                                class="form-control"
                                id="time"
                                v-model="time"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="barber_name" class="block text-sm font-medium text-gray-700">Barbero</label>
                            <select 
                                id="barber_name"
                                v-model="barber_name"
                                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                                <option value="" disabled selected>Selecciona un barbero</option>
                                <option v-for="barber in barbers" :key="barber.value" :value="barber.name">
                                    {{ barber.name }}
                                </option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Servicios</label>
                            <input
                                type="text"
                                class="form-control"
                                id="service_name"
                                v-model="service_name"
                                required
                            />
                        </div>
                        
                        <button type="submit" class="btn btn-success">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
