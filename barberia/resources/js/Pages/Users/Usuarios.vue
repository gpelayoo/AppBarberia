<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import CreateUserModal from '@/Pages/Users/Components/CreateUserModal.vue';
import axios from 'axios';

export default {
    components: {
        AuthenticatedLayout,
        Head,
        CreateUserModal
    },
    data() {
        return {
            usuarios: usePage().props.usuarios,
        };
    },
    methods: {
        editUser(id) {
            Inertia.get(route('usuarios.edit', id));
        },
        showModal() {
            const modal = new bootstrap.Modal(document.getElementById('createUserModal'));
            modal.show();
        },
        async deleteUser(id) {
            if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
                try {
                    await axios.post(route('usuarios.delete', id));
                    const index = this.usuarios.findIndex(user => user.id === id);
                    if (index !== -1) {
                        this.usuarios.splice(index, 1);
                    }
                    alert('Usuario eliminado correctamente.');
                } catch (error) {
                    console.error(error);
                    alert('Hubo un problema al eliminar el usuario.');
                }
            }
        }
    }
};
</script>


<template>
    <Head title="Usuarios" />

    <AuthenticatedLayout>
        <template #header>
            <div class="flex justify-between items-center">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">Gestión de usuarios</h2>
                <button @click="showModal" class="btn btn-primary">Crear Usuario</button>
            </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Acciones</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="usuario in usuarios" :key="usuario.id">
                                <td>{{ usuario.id }}</td>
                                <td>{{ usuario.name }}</td>
                                <td>{{ usuario.email }}</td>
                                <td>{{ usuario.role }}</td>
                                <td>
                                    <button @click="editUser(usuario.id)" class="btn btn-primary me-2">
                                        <i class="fas fa-edit"></i>
                                    </button>

                                    <button @click="deleteUser(usuario.id)" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <CreateUserModal />
    </AuthenticatedLayout>
</template>
