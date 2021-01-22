<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }} - 库存{{ product.inventory }}
      <br />
      <input type="number" v-model="$store.state.products.buyNum">
      <button :disabled="!product.inventory" @click="addProductToCard(product, $store.state.products.buyNum)">
        加入购物车
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.all;
    },
  },
  methods: {
    addProductToCard(product, buyNum) {
      this.$store.dispatch("cart/addProductToCard", {product, buyNum});
    }
  },

  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>
