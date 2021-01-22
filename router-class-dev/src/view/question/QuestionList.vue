<template>
  <div>
    <h2>问答列表页</h2>
    <router-link :to="{ name: 'questionView', params: { id: 'zhangsan' } }"
      >张三的问答</router-link
    >
    <br />
    <br />
    <router-link :to="{ name: 'questionView', params: { id: 'lisi' } }"
      >李四的问答</router-link
    >
  </div>
</template>
<script>
export default {
  name: "questionList",
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
