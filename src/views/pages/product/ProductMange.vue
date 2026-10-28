<script setup lang="ts">
import { api, baseUrl } from "@/api.ts";
import PageHead from "@/components/PageHead.vue";
import type { Product } from "@/interfaces/product";
import { ref } from "vue";

let products = ref<Product[]>([]);
// console.log(products);

let pagelinks = ref<any>([]);

function getAllProducts( url : string) {
  api
    .get(url)
    .then((res: any) => {
       console.log(res.data.products)
      products.value = res.data.products.data;
      //  console.log(products);
      pagelinks.value = res.data.products.links
    })
    .catch((err: any) => {
      console.log(err.response.data);
    });
}

getAllProducts('products');


</script>

<template>
  <PageHead title="Product" subtitle="manage Product">
    <RouterLink class="btn-solid theme-accent" to="/products/create">
      <i class="bi bi-plus-lg"></i> Add new
    </RouterLink>
  </PageHead>

  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <div class="table-head">
          <h5 class="card-title">Recent orders</h5>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Item</th>
                <th>price</th>
                <th>Qty</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in products" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <div class="item-img">
                    <img
                      v-if="item.image"
                      :src="`${baseUrl}${item.image}`"
                      width="40"
                      height="40"
                      class="rounded"
                      alt="img-name"
                    />
                    <img
                      v-else
                      src="https://placehold.co/400"
                      width="40"
                      height="40"
                      class="rounded"
                      alt="img-name"
                    />
                  </div>
                  <strong>{{ item.name }}</strong>
                </td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
                <td>
                  <span
                    class="badge badge-subtle"
                    :class="item.active ? 'theme-success' : 'theme-danger'"
                    >{{ item.active ? "active" : "Inactive" }}</span
                  >
                </td>

                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Accent theme example"
                  >
                    <RouterLink  :to="`/products/${item.id}`" type="button" class="btn-outline theme-secondary">
                      <i class="bi bi-eye"></i>
                    </RouterLink>
                    <RouterLink
                      to="/products/edit"
                      type="button"
                      class="btn-outline theme-secondary"
                    >
                      <i class="bi bi-pencil"></i>
                    </RouterLink>
                    <button type="button" class="btn-outline theme-secondary">
                      <i class="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="fg-4">10 items out of 100</td>
                <td colspan="3">
                  <nav aria-label="Page navigation example">
                    <ul
                      class="pagination pagination-sm theme-accent justify-content-end mb-0">
                      <li v-for="links in pagelinks"  class="page-item" :class="links.active ? 'active' : ''">
                        <button type="button" class="page-link" :class="links.page == null ? 'disabled' : '' " @click="getAllProducts(links.url)">
                          <span v-html="links.label"></span> 
                        </button>
                      </li>
                    
                    </ul>
                  </nav>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
