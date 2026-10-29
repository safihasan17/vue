import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./views/pages/Dashboard.vue";
import ProductMange from "./views/pages/product/ProductMange.vue";
import UserManage from "./views/pages/user/UserManage.vue";
import ProductCreate from "./views/pages/product/ProductCreate.vue";
import ProductEdit from "./views/pages/product/ProductEdit.vue";
import ProductDetails from "./views/pages/product/ProductDetails.vue";

const routes = [
    {path: '/', component:Dashboard},
    {path: '/users', component:UserManage},
    {path: '/products', component:ProductMange},
    {path: '/products/create', component:ProductCreate},
    {path: '/products/edit/:id', component:ProductEdit},
    {path: '/products/:id', component:ProductDetails},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});