<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted } from 'vue';

onMounted(() => {
    const carouselElement = document.getElementById('carouselExample');
    new bootstrap.Carousel(carouselElement, {
        interval: 3000,
    });
});
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Bienvenido al sistema de agendamiento de BarberMaster
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div id="carouselExample" class="carousel slide mb-5" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/1.jpg" class="d-block w-100" alt="Imagen 1">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/2.jpg" class="d-block w-100" alt="Imagen 2">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/3.jpg" class="d-block w-100" alt="Imagen 3">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/4.png" class="d-block w-100" alt="Imagen 4">
                        </div>
                        <div class="carousel-item">
                            <img src="/images/5.jpg" class="d-block w-100" alt="Imagen 5">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-5">
                    <div class="p-6 text-gray-900 text-center">
                        ¡Bienvenido! Aquí puedes gestionar tus citas y controlar los servicios de BarberMaster.
                    </div>
                </div>

                <div class="text-center">
                    <a href="https://facebook.com" target="_blank" class="btn btn-primary mx-2">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" class="btn btn-danger mx-2">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" class="btn btn-info mx-2">
                        <i class="fab fa-twitter"></i> Twitter
                    </a>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.carousel img {
    height: 400px;
    object-fit: cover;
}
</style>
