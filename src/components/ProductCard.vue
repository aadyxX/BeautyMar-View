<template>
  <div class="card h-100 product-card-custom">
    <img :src="product.image" class="card-img-top" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">${{ product.price.toFixed(2) }}</p>
      <button class="btn btn-primary-custom" @click="addToCart"><i class="bi bi-cart-plus"></i> Agregar al Carrito</button>
      <a href="#" class="btn btn-secondary-custom">Ver más</a>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store/cart';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

function addToCart() {
  cartStore.addItem(props.product);
  alert(`${props.product.name} ha sido agregado al carrito.`);
}
</script>

<style scoped>
/* Scoped styles for the product card if needed */
</style>
