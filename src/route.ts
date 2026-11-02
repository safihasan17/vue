import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/pages/Dashboard.vue";
import ProductMange from "./views/pages/product/ProductMange.vue";
import UserManage from "./views/pages/user/UserManage.vue";
import ProductCreate from "./views/pages/product/ProductCreate.vue";
import ProductEdit from "./views/pages/product/ProductEdit.vue";
import ProductDetails from "./views/pages/product/ProductDetails.vue";
import Count from "./views/pages/pinia/Count.vue";
import UpdateId from "./views/pages/pinia/UpdateId.vue";
import Error404 from "./views/pages/errors/404.vue";
import Login from "./views/pages/auth/Login.vue";


const routes = [
    {path: '/', component:Dashboard},
    {path: '/users', component:UserManage},
    {path: '/products', component:ProductMange},
    {path: '/products/create', component:ProductCreate},
    {path: '/products/edit/:id', component:ProductEdit},
    {path: '/products/:id', component:ProductDetails},
    {path: '/count', component:Count},
    {path: '/UpdateId', component:UpdateId},
    {path: '/login', component: Login, meta: { layout: 'auth', guest: true }},
    {path: '/:pathMatch(.*)*', component: Error404 , meta: { layout: 'auth', all:true }}
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('vuetoken');
    if(token && to.meta.guest) {
        next({ path: '/' });
    }else if(!token && !to.meta.guest && !to.meta.all) {
        next({ path: '/login' });
    }else{
        next();
    }
});