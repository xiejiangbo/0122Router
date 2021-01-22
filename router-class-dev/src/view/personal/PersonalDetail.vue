<template>
  <div>
    <h2>详细信息如下</h2>
    
   姓名: {{id}} 
  </div>
</template>
<script>
export default {
  props: ["id"],
  name: "personalDetail",
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
