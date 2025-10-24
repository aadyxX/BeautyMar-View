<template>
  <main class="container my-5">
    <div class="row">
        <div class="col-12 text-center">
            <h2 class="mb-4">Nuestra Boutique</h2>
            <p class="lead">Visítanos y descubre un mundo de belleza y color.</p>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-md-6">
            <h3>Dirección</h3>
            <p>Avenida de la Belleza 456, Colonia Glamour</p>
            <p>Ciudad de México, CDMX, México. C.P. 01000</p>
            <h3 class="mt-4">Horario</h3>
            <p>Lunes a Sábado: 11:00 AM - 8:00 PM</p>
            <p>Domingo: 12:00 PM - 6:00 PM</p>
        </div>
        <div class="col-md-6">
            <div class="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0361557298!2d-74.25986613524469!3d40.69767006333939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNueva%20York%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1678886345678!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
// No script needed for this simple component
</script>

<style scoped>
.map-responsive {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
}
.map-responsive iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
}
</style>
