<template>
  <ul class="resource-list">
    <li v-for="(resource, i) in resources" :key="i">
      <resource :resource="resource"></resource>
    </li>
  </ul>
</template>

<script>
import Resource from "@/components/Resource";
export default {
  name: "resource-list",
  components: {
    Resource
  },
  props: {
    resources: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.resource-list {
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  li {
    margin-bottom: 24px;
  }
}
</style>