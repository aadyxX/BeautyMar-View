import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref(JSON.parse(localStorage.getItem('cart')) || [])

  // Getters
  const itemCount = computed(() => items.value.length)
  const subtotal = computed(() => items.value.reduce((acc, item) => acc + item.price * item.quantity, 0))
  const discount = computed(() => {
    return subtotal.value > 100 ? subtotal.value * 0.1 : 0;
  });
  const iva = computed(() => (subtotal.value - discount.value) * 0.16);
  const shipping = computed(() => subtotal.value > 0 ? 10.00 : 0);
  const total = computed(() => subtotal.value - discount.value + iva.value + shipping.value);

  // Actions
  function syncLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(items.value))
  }

  function addItem(product) {
    const existingProduct = items.value.find(item => item.id === product.id)
    if (existingProduct) {
      existingProduct.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
    syncLocalStorage()
  }

  function removeItem(productId) {
    items.value = items.value.filter(item => item.id !== productId)
    syncLocalStorage()
  }

  function updateQuantity(productId, quantity) {
    const product = items.value.find(item => item.id === productId)
    if (product) {
        if (quantity > 0) {
            product.quantity = quantity
        } else {
            removeItem(productId)
        }
    }
    syncLocalStorage()
  }
  
  function clearCart() {
      items.value = [];
      syncLocalStorage();
  }

  return { items, itemCount, total, subtotal, addItem, removeItem, updateQuantity, clearCart, discount, iva, shipping }
})
