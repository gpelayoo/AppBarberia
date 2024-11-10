<script>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        AuthenticatedLayout,
        Head
    }
};
</script>


<template>
    <Head title="Servicios" />
    <AuthenticatedLayout>
        <template #header>     
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Solicitud de servicios</h2>            
        </template>
    </AuthenticatedLayout>
</template>