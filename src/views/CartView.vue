<template>
  <main class="container my-5">
    <h2 class="text-center mb-4">Mi Carrito de Compras</h2>
    <div id="cart-container" class="row">
      <div class="col-md-8">
        <div v-if="cartStore.itemCount > 0">
          <div v-for="item in cartStore.items" :key="item.id" class="card mb-3">
            <div class="row g-0">
              <div class="col-md-2">
                <img :src="item.image" class="img-fluid rounded-start" :alt="item.name">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h5 class="card-title">{{ item.name }}</h5>
                  <p class="card-text">${{ item.price.toFixed(2) }}</p>
                </div>
              </div>
              <div class="col-md-4 d-flex align-items-center justify-content-end">
                <input type="number" class="form-control w-50 me-2" :value="item.quantity" min="1" @change="cartStore.updateQuantity(item.id, parseInt($event.target.value))">
                <button class="btn btn-danger" @click="cartStore.removeItem(item.id)">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Tu carrito está vacío.</p>
        </div>
      </div>

      <!-- Shipping and Payment -->
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Resumen del Pedido</h5>
            <div>
              <p>Subtotal: ${{ cartStore.subtotal.toFixed(2) }}</p>
              <p>Descuento (10% en compras mayores a $100): -${{ cartStore.discount.toFixed(2) }}</p>
              <p>IVA (16%): ${{ cartStore.iva.toFixed(2) }}</p>
              <p>Envío: ${{ cartStore.shipping.toFixed(2) }}</p>
              <hr>
              <p><strong>Total: ${{ cartStore.total.toFixed(2) }}</strong></p>
            </div>
            <hr>
            <h5 class="card-title">Información de Envío</h5>
            <form @submit.prevent="handleCheckout">
              <div class="mb-3">
                <label for="shipping-name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="shipping-name" v-model="shippingInfo.name" required>
              </div>
              <div class="mb-3">
                <label for="shipping-address" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="shipping-address" v-model="shippingInfo.address" required>
              </div>
              <div class="mb-3">
                <label for="shipping-city" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="shipping-city" v-model="shippingInfo.city" required>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary-custom w-100">Proceder al Pago</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

const shippingInfo = ref({
  name: '',
  address: '',
  city: ''
});

function handleCheckout() {
  if (cartStore.itemCount === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  // Form validation is implicitly handled by `required` attribute
  // In a real app, you would have more robust validation
  console.log('Shipping Info:', shippingInfo.value);
  alert('¡Gracias por tu compra! (Esto es una simulación)');
  
  cartStore.clearCart();
  shippingInfo.value = { name: '', address: '', city: '' };
  router.push('/');
}
</script>

<style scoped>
/* Scoped styles for the cart view if needed */
</style>
