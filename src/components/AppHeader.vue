<template>
  <div>
    <!-- Header -->
    <header class="header-banner text-white text-center">
        <div class="container-fluid">
            <h1 class="display-4">BeautyMar</h1>
        </div>
    </header>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">BeautyMar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/" active-class="active">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/ubicacion" active-class="active">Ubicación</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacto" active-class="active">Contacto</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/carrito" active-class="active">Carrito</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script setup>
// No script needed for this simple component
</script>

<style scoped>
/* Scoped styles for the header if needed */
.navbar-brand, .nav-link.router-link-exact-active {
    font-weight: bold;
}
</style>
