<template>
  <div>
    
    <h2>博客详情页</h2>
    {{id}} 的博客
  </div>
</template>
<script>
export default {
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
