<script>
import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import CreateClientModal from '@/Pages/Clients/Components/CreateClientModal.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        AuthenticatedLayout,
        CreateClientModal,
    },
    data() {
        return {
            clients: this.$page.props.clients,
        };
    },
    methods: {
        editClient(id) {
            Inertia.get(route('clients.edit', id));
        },
        showModal() {
            const modal = new bootstrap.Modal(document.getElementById('createClientModal'));
            modal.show();
        },
        async deleteClient(id) {
            if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
                try {
                    await axios.post(route('clients.delete', id));
                    const index = this.clients.findIndex(client => client.id === id);
                    if (index !== -1) {
                        this.clients.splice(index, 1);
                    }
                    alert('Cliente eliminado correctamente.');
                } catch (error) {
                    console.error(error);
                    alert('Hubo un problema al eliminar el cliente.');
                }
            }
        },
    },
};
</script>

<template>
    <Head title="Clientes" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Gestión de clientes</h2>
                <button @click="showModal" class="btn btn-primary">Crear Cliente</button>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Tipo de documento</th>
                                <th scope="col">Documento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Email</th>
                                <th scope="col">Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="client in clients" :key="client.id">
                                <td>{{ client.id }}</td>
                                <td>{{ client.document_type }}</td>
                                <td>{{ client.document_number }}</td>
                                <td>{{ client.name }}</td>
                                <td>{{ client.lastname }}</td>
                                <td>{{ client.cellphone }}</td>
                                <td>{{ client.email }}</td>
                                <td>
                                    <button @click="editClient(client.id)" class="btn btn-primary me-2">
                                        <i class="fas fa-edit"></i>
                                    </button>

                                    <button @click="deleteClient(client.id)" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <CreateClientModal />
    </AuthenticatedLayout>
</template>
