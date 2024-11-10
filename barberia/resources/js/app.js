import './bootstrap';
import '../css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
//Components
import SliderComponent from './Pages/Components/SliderComponent.vue';
import HeaderComponent from './Pages/Components/HeaderComponent.vue';

import Usuarios from './Pages/Users/Usuarios.vue';
import UsuariosEdit from './Pages/Users/UsuariosEdit.vue';
import Turnos from './Pages/Turnos/Turnos.vue';
import TurnosEdit from './Pages/Turnos/TurnosEdit.vue';
import Clients from './Pages/Clients/Clients.vue';
import ClientsEdit from './Pages/Clients/ClientsEdit.vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .component('SliderComponent', SliderComponent)
            .component('HeaderComponent', HeaderComponent)
            .component('Usuarios', Usuarios)
            .component('UsuariosEdit', UsuariosEdit)
            .component('Turnos', Turnos)
            .component('TurnosEdit', TurnosEdit)
            .component('Clients', Clients)
            .component('ClientsEdit', ClientsEdit)
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
