export default [
  {
    name: 'home',
    path: '/',
    component: resolve => import('@/view/Home.vue').then(resolve)
  }
]
