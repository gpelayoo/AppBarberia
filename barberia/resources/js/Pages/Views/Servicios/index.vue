<template>
    <div class="bg-dark">
        <div class="card-deck text-light">
            <div class="card-sm mx-auto" style="width: 18rem;">
                <img :src="'/images/Corte'" class="card-img-top rounded mx-auto d-block" alt="corte">
                <div class="card-body">
                  <h5 class="card-title">Corte</h5>
                  <p class="card-text">Corte de cabello por $15.000</p>
                  <a href="#" class="btn btn-primary mb-3">Solicitar</a>
                </div>
            </div>
    
            <div class="card-sm mx-auto" style="width: 18rem;">
                <img :src="'/images/barba.jpg'" class="card-img-top rounded mx-auto d-block" alt="barba">
                <div class="card-body">
                  <h5 class="card-title">Corte + Barba</h5>
                  <p class="card-text">Corte de cabello y perfilamiento de barba por $20.000</p>
                  <a href="#" class="btn btn-primary mb-3">Solicitar</a>
                </div>
            </div>
    
            <div class="card-sm mx-auto" style="width: 18rem;">
                <img :src="'/images/cejas'" class="card-img-top rounded mx-auto d-block" alt="cejas">
                <div class="card-body">
                  <h5 class="card-title">Cejas + Barba</h5>
                  <p class="card-text">Perfilamiento de cejas y barba por $15.000</p>
                  <a href="#" class="btn btn-primary mb-3">Solicitar</a>
                </div>
            </div>
    
            <div class="card-sm mx-auto" style="width: 18rem;">
                <img :src="'/images/completo.jpg'" class="card-img-top rounded mx-auto d-block" alt="completo">
                <div class="card-body">
                  <h5 class="card-title">Servicio completo</h5>
                  <p class="card-text">Corte de cabello, perfilamiento de barbas y cejas por $30.000</p>
                  <a href="#" class="btn btn-primary mb-3">Solicitar</a>
                </div>
            </div>
        </div>
       
    </div>


</template>
<script>
export default{
    name: 'ServiciosComponent'
}
</script>