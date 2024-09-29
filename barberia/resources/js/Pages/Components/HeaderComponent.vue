<template>
    <header class="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-20">
        <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-xl font-bold">Barber Master</h1>
            <nav>
                <Link
                    v-if="$page.props.auth.user"
                    :href="route('dashboard')"
                    class="font-semibold text-white hover:text-gray-300 px-4"
                >Dashboard</Link>
                <template v-else>
                    <Link
                        :href="route('login')"
                        class="font-semibold text-white hover:text-gray-300 px-4"
                    >Log in</Link>
                    <Link
                        v-if="canRegister"
                        :href="route('register')"
                        class="font-semibold text-white hover:text-gray-300 px-4"
                    >Register</Link>
                </template>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    canRegister: {
        type: Boolean,
        required: true,
    },
});
</script>

<style scoped>
header {
    background-color: rgba(31, 41, 55, 0.9); /* Slightly transparent background */
}
</style>
