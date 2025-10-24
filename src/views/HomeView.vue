<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section text-center text-white">
      <div class="hero-content">
        <h1 class="display-3 animated-title">Luce radiante, siéntete increíble</h1>
        <p class="lead animated-lead">Explora nuestra colección de maquillaje de alta calidad.</p>
      </div>
    </section>

    <!-- Main Products -->
    <main class="container my-5">
      <h2 class="text-center mb-4">Los más vendidos</h2>
      <div id="productCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-3" v-for="product in mainProducts.slice(0, 4)" :key="product.id">
                <ProductCard :product="product" class="product-card-custom" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-3" v-for="product in mainProducts.slice(4, 8)" :key="product.id">
                <ProductCard :product="product" class="product-card-custom" />
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>

    <!-- Featured Products -->
    <section class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4">Productos Destacados</h2>
            <div class="row">
                <div class="col-md-3" v-for="product in featuredProducts" :key="product.id">
                    <ProductCard :product="product" />
                </div>
            </div>
            <div class="text-center mt-4">
                <a href="#" class="btn btn-outline-dark">Ver todos los productos</a>
            </div>
        </div>
    </section>

    <!-- Categories -->
    <section class="container my-5">
        <h2 class="text-center mb-4">Categorías</h2>
        <div class="row">
            <div class="col-md-3 text-center" v-for="category in categories" :key="category.name">
                <img :src="category.image" class="rounded-circle mb-2" :alt="category.name">
                <h5>{{ category.name }}</h5>
            </div>
        </div>
        <div class="text-center mt-4">
            <a href="#" class="btn btn-outline-dark">Ver todas las categorías</a>
        </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const mainProducts = ref([
    { id: 1, name: 'Labial Rojo Pasión', price: 15.00, image: 'https://via.placeholder.com/300x200/FF0000/FFFFFF?text=Labial' },
    { id: 2, name: 'Sombra de Ojos Nude', price: 20.00, image: 'https://via.placeholder.com/300x200/D2B48C/FFFFFF?text=Sombra' },
    { id: 3, name: 'Base de Maquillaje Fluida', price: 25.00, image: 'https://via.placeholder.com/300x200/DEB887/FFFFFF?text=Base' },
    { id: 4, name: 'Brocha para Polvos', price: 12.00, image: 'https://via.placeholder.com/300x200/808080/FFFFFF?text=Brocha' },
    { id: 5, name: 'Delineador Negro Intenso', price: 10.00, image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Delineador' },
    { id: 6, name: 'Máscara de Pestañas Volumen', price: 18.00, image: 'https://via.placeholder.com/300x200/000000/FFFFFF?text=Máscara' },
    { id: 7, name: 'Paleta de Sombras Colorida', price: 35.00, image: 'https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Paleta' },
    { id: 8, name: 'Corrector de Ojeras', price: 16.00, image: 'https://via.placeholder.com/300x200/FFE4E1/000000?text=Corrector' },
]);

const featuredProducts = ref([
    { id: 10, name: 'Iluminador en Polvo', price: 22.00, image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Iluminador' },
    { id: 11, name: 'Rubor en Crema', price: 19.00, image: 'https://via.placeholder.com/300x200/FFC0CB/000000?text=Rubor' },
    { id: 12, name: 'Fijador de Maquillaje', price: 28.00, image: 'https://via.placeholder.com/300x200/FFFFFF/000000?text=Fijador' },
    { id: 13, name: 'Esponja de Maquillaje', price: 8.00, image: 'https://via.placeholder.com/300x200/FFB6C1/000000?text=Esponja' },
]);

const categories = ref([
    { name: 'Labiales', image: 'https://via.placeholder.com/150x150/FF0000/FFFFFF?text=Labiales' },
    { name: 'Sombras', image: 'https://via.placeholder.com/150x150/D2B48C/FFFFFF?text=Sombras' },
    { name: 'Bases', image: 'https://via.placeholder.com/150x150/DEB887/FFFFFF?text=Bases' },
    { name: 'Brochas', image: 'https://via.placeholder.com/150x150/808080/FFFFFF?text=Brochas' },
]);

const handleScroll = () => {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const scrollY = window.scrollY;
    heroSection.style.backgroundPositionY = `${-scrollY * 0.5}px`;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/../img/hero-img.png') no-repeat center center/cover;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  animation: fadeIn 1s ease-in-out;
}

.animated-title {
  animation: slideInFromBottom 1s ease-in-out;
}

.animated-lead {
  animation: slideInFromBottom 1.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

#productCarousel .carousel-control-prev {
  left: -5rem;
}

#productCarousel .carousel-control-next {
  right: -5rem;
}

#productCarousel .carousel-control-prev-icon,
#productCarousel .carousel-control-next-icon {
  background-color: var(--dark-gray);
}
</style>
