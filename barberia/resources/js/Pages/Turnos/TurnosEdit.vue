<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { usePage } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';
import Choices from 'choices.js';
import 'choices.js/public/assets/styles/choices.css';

export default {
    components: {
        AuthenticatedLayout,
        Head
    },
    props: {
        turno: Object
    },
    data() {
        return {
            document_number: this.turno.document_number,
            name: this.turno.name,
            lastname: this.turno.lastname,
            cellphone: this.turno.cellphone,
            email: this.turno.email,
            date: this.turno.date,
            time: this.turno.time,
            barber_name: this.turno.barber_name,
            service_name: this.turno.service_name,
            clients: [],
            barbers: [],
            successMessage: '',
            err: ''
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
        async updateTurno() {
            try {
                await axios.post(`/turnos/update/${this.turno.id}`, {
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

                this.successMessage = 'Turno actualizado correctamente';
                this.err = '';
                Inertia.get(route('turnos')); 

            } catch (error) {
                this.err = 'Error al actualizar el turno. Intenta nuevamente.';
                console.error(error);
            }
        }
    }
};
</script>

<template>
    <Head title="Editar Turno" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Editar Turno</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <form @submit.prevent="updateTurno">

                            <div class="mb-4">
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

                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    v-model="name" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    disabled
                                />
                            </div>

                            <div class="mb-4">
                                <label for="lastname" class="block text-sm font-medium text-gray-700">Apellido</label>
                                <input 
                                    type="lastname" 
                                    id="lastname" 
                                    v-model="lastname" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="cellphone" class="block text-sm font-medium text-gray-700">Celular</label>
                                <input 
                                    type="cellphone" 
                                    id="cellphone" 
                                    v-model="cellphone" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    v-model="email" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="date" class="block text-sm font-medium text-gray-700">Fecha</label>
                                <input 
                                    type="date" 
                                    id="date" 
                                    v-model="date" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="time" class="block text-sm font-medium text-gray-700">Hora</label>
                                <input 
                                    type="time" 
                                    id="time" 
                                    v-model="time" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="barber_name" class="block text-sm font-medium text-gray-700">Barbero</label>
                                <select 
                                    id="barber_name"
                                    v-model="barber_name"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="" disabled selected>Selecciona un barbero</option>
                                    <option v-for="barber in barbers" :key="barber.value" :value="barber.id">
                                        {{ barber.name }}
                                    </option>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label for="service_name" class="block text-sm font-medium text-gray-700">Servicios</label>
                                <input 
                                    type="service_name" 
                                    id="service_name" 
                                    v-model="service_name" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="flex items-center justify-end">
                                <button type="submit" class="btn btn-success">
                                    Guardar cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
