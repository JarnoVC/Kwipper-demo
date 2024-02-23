import { createRouter, createWebHistory } from 'vue-router'
import ProductsPageVue from '@/views/ProductsPage.vue'
import ProductDetailPageVue from '@/views/ProductDetailPage.vue'
import CartPageVue from '@/views/CartPage.vue'
import NotFoundPageVue from '@/views/NotFoundPage.vue'


const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPageVue,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPageVue,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPageVue,
  }, {
    path: '/',
    redirect: '/products',
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPageVue,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
