<template>
  <div>
    <h2>博客列表页</h2>
    <router-link :to="{ name: 'blogView', params: { id: 'zhangsan' } }"
      >张三的博客</router-link
    >
    <br />
    <br />
    <router-link :to="{ name: 'blogView', params: { id: 'lisi' } }"
      >李四的博客</router-link
    >
  </div>
</template>
<script>
export default {
  name: "blogList",
  props: ["id"],
  computed: {
    routerInfo() {
      const { fullPath, path, title, params, query, meta } = this.$route;
      return {
        fullPath,
        path,
        title,
        params,
        query,
        meta
      };
    }
  }
};
</script>
