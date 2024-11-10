<script>
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

export default {
    data() {
        return {
            document_type: '',
            document_number: '',
            name: '',
            lastname: '',
            cellphone: '',
            email: '',
        };
    },
    methods: {
        async storeClient() {
            try {
                const response = await axios.post(route('clients.store'), {
                    document_type: this.document_type,
                    document_number: this.document_number,
                    name: this.name,
                    lastname: this.lastname,
                    cellphone: this.cellphone,
                    email: this.email,
                });

                alert('Cliente creado correctamente');
                Inertia.get(route('clients'));
            } catch (error) {
                console.error(error);
                alert('Hubo un problema al crear el cliente');
            }
        },
    },
};
</script>

<template>
    <div
        class="modal fade"
        id="createClientModal"
        tabindex="-1"
        aria-labelledby="createClientModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createUserModalLabel">Crear Cliente</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="storeClient">
                        <div class="mb-3">
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
                        <div class="mb-3">
                            <label for="document_type" class="form-label">Documento</label>
                            <input
                                type="number"
                                class="form-control"
                                id="document_number"
                                v-model="document_number"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="document_type" class="form-label">Nombre</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                v-model="name"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="document_type" class="form-label">Apellido</label>
                            <input
                                type="text"
                                class="form-control"
                                id="lastname"
                                v-model="lastname"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="document_type" class="form-label">Celular</label>
                            <input
                                type="text"
                                class="form-control"
                                id="cellphone"
                                v-model="cellphone"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                v-model="email"
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


