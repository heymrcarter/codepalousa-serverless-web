<template>
  <a class="resource" :href="resource.link" target="_blank" rel="noopener">
    <h2>{{ resource.name }}</h2>
    <p>{{ resource.description }}</p>
    <p class="link">{{ resource.link }}</p>
  </a>
</template>

<script>
export default {
  name: "resource",
  props: {
    resource: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.resource {
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 4px;
  background-color: white;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 24px;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h2 {
    margin: 0;
  }

  .link {
    color: #676767;
    margin-bottom: 0;
  }
}
</style>