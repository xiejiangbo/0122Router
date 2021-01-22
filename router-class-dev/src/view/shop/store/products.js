import shop from "../api/shop";

// initial state
const state = {
  all: [],
  buyNum: 1
};

// getters
const getters = {};

const mutations = {
  setAll(state, products) {
    state.all = products;
  },
  deleteProductInventory(state, {id, buyNum}) {
    const product = state.all.find(product => product.id === id);
    product.inventory-=buyNum;
  },
  addProductInventory(state, {id, num}){
    const product = state.all.find(product => product.id === id);
    product.inventory+=num;
  }
};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts(products => {
      commit("setAll", products);
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
