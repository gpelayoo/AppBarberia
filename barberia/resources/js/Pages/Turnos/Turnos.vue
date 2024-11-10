<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import CreateTurnoModal from '@/Pages/Turnos/Components/CreateTurnoModal.vue';
import axios from 'axios';

export default {
    components: {
        AuthenticatedLayout,
        Head,
        CreateTurnoModal
    },
    data() {
        return {
            turnos: usePage().props.turnos,
        };
    },
    methods: {
        editTurno(id) {
            Inertia.get(route('turnos.edit', id));
        },
        showModal() {
            const modal = new bootstrap.Modal(document.getElementById('createTurnoModal'));
            modal.show();
        },
        async deleteTurno(id) {
            if (confirm('¿Estás seguro de que deseas eliminar este turno?')) {
                try {
                    await axios.post(route('turnos.delete', id));
                    const index = this.turnos.findIndex(turno => turno.id === id);
                    if (index !== -1) {
                        this.turnos.splice(index, 1);
                    }
                    alert('Turno eliminado correctamente.');
                } catch (error) {
                    console.error(error);
                    alert('Hubo un problema al eliminar el Turno.');
                }
            }
        }
    }
};
</script>
<template>
    <Head title="Turnos" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Gestión de turnos</h2>
                <button @click="showModal" class="btn btn-primary">Solicitar turno</button>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Email</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">Barbero</th>
                                <th scope="col">Servicios</th>
                                <th scope="col">Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="turno in turnos" :key="turno.id">
                                <td>{{ turno.id }}</td>
                                <td>{{ turno.document_number }}</td>
                                <td>{{ turno.name }}</td>
                                <td>{{ turno.lastname }}</td>
                                <td>{{ turno.cellphone }}</td>
                                <td>{{ turno.email }}</td>
                                <td>{{ turno.date }}</td>
                                <td>{{ turno.time }}</td>
                                <td>{{ turno.barber_name }}</td>
                                <td>{{ turno.service_name }}</td>
                                <td>
                                    <button @click="editTurno(turno.id)" class="btn btn-primary me-2">
                                        <i class="fas fa-edit"></i>
                                    </button>

                                    <button @click="deleteTurno(turno.id)" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <CreateTurnoModal />
    </AuthenticatedLayout>
</template>
