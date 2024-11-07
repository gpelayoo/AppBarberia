<template>
    <div
        class="modal fade"
        id="createUserModal"
        tabindex="-1"
        aria-labelledby="createUserModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createUserModalLabel">Crear Usuario</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="storeUser">
                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                v-model="name"
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
                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password"
                                v-model="password"
                                required
                            />
                        </div>
                        <div class="mb-3">
                            <label for="password_confirmation" class="form-label">Confirmar Contraseña</label>
                            <input
                                type="password"
                                class="form-control"
                                id="password_confirmation"
                                v-model="password_confirmation"
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

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

const name = ref('');
const email = ref('');
const password = ref('');
const password_confirmation = ref('');

const storeUser = async () => {
    try {
        const response = await axios.post(route('usuarios.store'), {
            name: name.value,
            email: email.value,
            password: password.value,
            password_confirmation: password_confirmation.value,
        });

        alert('Usuario creado correctamente');
        Inertia.get(route('usuarios')); 
    
    } catch (error) {
        console.error(error);
        alert('Hubo un problema al crear el usuario');
    }
};
</script>
