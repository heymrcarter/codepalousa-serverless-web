<template>
  <div class="home">
    <h1>Serverless resources</h1>
    <resource-list :resources="resources"></resource-list>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ResourceList from "@/components/ResourceList";
export default {
  name: "home",
  components: {
    ResourceList
  },
  data() {
    return {
      resources: []
    };
  },
  methods: {
    ...mapActions(["getResources"])
  },
  async mounted() {
    this.resources = await this.getResources();
  }
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 600px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
}
</style>

