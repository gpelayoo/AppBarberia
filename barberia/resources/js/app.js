import './bootstrap';
import { createApp } from 'vue';

// Componentes de la aplicación
//Home
import HomeComponent from '@/Pages/Views/Home/home.vue';
//Turnos
import TurnosComponent from '@/Pages/Views/Turnos/turnos.vue';
import TurnosModal from '@/Pages/Views/Turnos/Components/TurnosModal.vue';
//Servicios
import ServiciosComponent from '@/Pages/Views/Servicios/index.vue'

const app = createApp({
    components:{
        HomeComponent,
        TurnosComponent,
        TurnosModal,
        ServiciosComponent
    }
});

app.mount('#app');