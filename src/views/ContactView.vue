<template>
  <main class="container my-5">
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <h2 class="text-center mb-4">Contáctanos</h2>
            <p class="text-center mb-5">¿Tienes alguna pregunta sobre nuestros productos o quieres colaborar con nosotros? Llena el siguiente formulario y nuestro equipo de belleza se pondrá en contacto contigo.</p>
            <form @submit.prevent="handleSubmit">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre Completo</label>
                    <input type="text" class="form-control" id="nombre" v-model="form.name" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" v-model="form.email" required>
                </div>
                <div class="mb-3">
                    <label for="telefono" class="form-label">Teléfono</label>
                    <input type="tel" class="form-control" id="telefono" v-model="form.phone">
                </div>
                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje</label>
                    <textarea class="form-control" id="mensaje" rows="5" v-model="form.message" required></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary-custom">Enviar Mensaje</button>
                </div>
            </form>
        </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
});

function handleSubmit() {
    // Here you would typically send the form data to a server
    alert('Gracias por tu mensaje. (Simulación)');
    form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
    };
}
</script>

<style scoped>
/* Scoped styles for the contact view if needed */
</style>
