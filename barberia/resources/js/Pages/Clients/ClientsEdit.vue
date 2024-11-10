<script>
import { ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        AuthenticatedLayout
    },
    data() {
        const { client } = this.$page.props;
        return {
            document_type: ref(client.document_type),
            document_number: ref(client.document_number),
            name: ref(client.name),
            lastname: ref(client.lastname),
            cellphone: ref(client.cellphone),
            email: ref(client.email),
            successMessage: ref(''),
            err: ref(''),
        };
    },
    methods: {
        async updateClient() {
            try {
                const response = await axios.post(`/clients/update/${this.$page.props.client.id}`, {
                    document_type: this.document_type,
                    document_number: this.document_number,
                    name: this.name,
                    lastname: this.lastname,
                    cellphone: this.cellphone,
                    email: this.email,
                });

                this.successMessage = 'Cliente actualizado correctamente';
                this.err = '';
                Inertia.get(route('clients')); 

            } catch (err) {
                this.err = 'Error al actualizar el cliente. Intenta nuevamente.';
                console.error(err);
            }
        },
    }
};
</script>

<template>
    <Head title="Editar Cliente" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Editar Cliente</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <form @submit.prevent="updateClient">
                            <div class="mb-4">
                                <label for="document_type" class="block text-sm font-medium text-gray-700">Tipo de documento</label>
                                <select 
                                    id="document_type" 
                                    v-model="document_type" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="Cedula de ciudadania">Cédula de ciudadanía</option>
                                    <option value="Cedula de extranjeria">Cédula de extranjería</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Documento</label>
                                <input 
                                    type="number" 
                                    id="document_number" 
                                    v-model="document_number" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    v-model="name" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Apellido</label>
                                <input 
                                    type="text" 
                                    id="lastname" 
                                    v-model="lastname" 
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Celular</label>
                                <input 
                                    type="text" 
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
