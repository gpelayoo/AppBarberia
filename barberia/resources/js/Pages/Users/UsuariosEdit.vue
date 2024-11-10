<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { Head } from '@inertiajs/vue3';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default {
    components: {
        AuthenticatedLayout,
        Head
    },
    setup() {
        const { usuario } = usePage().props;
        
        const name = ref(usuario.name);
        const email = ref(usuario.email);
        const role = ref(usuario.role);
        const password = ref('');
        const password_confirmation = ref('');
        const successMessage = ref('');
        const err = ref('');

        const updateUser = async () => {
            try {
                await axios.post(`/usuarios/update/${usuario.id}`, {
                    name: name.value,
                    email: email.value,
                    role: role.value,
                    password: password.value,
                    password_confirmation: password_confirmation.value,
                });
                successMessage.value = 'Usuario actualizado correctamente';
                err.value = '';
                Inertia.get(route('usuarios')); 
            } catch (error) {
                err.value = 'Error al actualizar el usuario. Intenta nuevamente.';
                console.error(error);
            }
        };

        return {
            name,
            email,
            role,
            password,
            password_confirmation,
            successMessage,
            err,
            updateUser
        };
    }
};
</script>


<template>
    <Head title="Editar Usuario" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Editar Usuario</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <form @submit.prevent="updateUser">
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    v-model="name" 
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
                                <label for="role" class="form-label">Rol</label>
                                <select
                                    class="form-select"
                                    id="role"
                                    v-model="role"
                                    required
                                >
                                    <option value="Admin">Administrador</option>
                                    <option value="Barbero">Barbero</option>
                                </select>
                            </div>

                            <div class="mb-4">
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    v-model="password" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div class="mb-4">
                                <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input 
                                    type="password" 
                                    id="password_confirmation" 
                                    v-model="password_confirmation" 
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
