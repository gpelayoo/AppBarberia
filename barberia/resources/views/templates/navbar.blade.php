<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
        <div class="container">
            <a class="navbar-brand">
                <img src="{{ asset('images/logo BM.jpg') }}" alt="Logo" width="40" height="40">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" href="{{ url('/') }}">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="{{ route('turnos.getView') }}">Turnos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="{{ route('servicios.getView') }}">Servicios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="{{ url('/facturacion') }}">Facturación</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="{{ url('/contactanos') }}">Contáctanos</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
