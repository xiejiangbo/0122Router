<template>
  <div>
    <h2>问答详情页</h2>
    {{id}} 的问答
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
