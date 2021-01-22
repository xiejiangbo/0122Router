<template>
  <ul>
    <li v-for="item in this.$store.state.cart.items" :key="item.id">
      名称：{{ item.title }}
      <br>
      单价：{{ item.price }}
      <br>
      数量：{{ item.count }}
      <br>
      小计：{{ item.subtotal }}
      <br>
      <button :disabled="!item.count" @click="delFromCart(item)">减一</button>
      <button @click="delAllCart(item)">都不要了</button>
    </li>
    <b>总计：{{ total }}</b>
  </ul>
</template>

<script>
export default {
  name: "Cart",
  computed:{
    total(){
      let total = 0;
      for(let item of this.$store.state.cart.items){
        total+=item.subtotal;
      }
      return total;
    }
  },
  methods:{
    delFromCart(item){
      this.$store.dispatch("cart/del", item)
    },
    delAllCart(item){
      this.$store.dispatch("cart/allDel", item)
    }
  }
};
</script>

<style scoped>

</style>