<template>
  <div id="app">
    <header>
      <div class="wrap">
        <img alt="CodepaLOUsa" src="/codepalousa.png" width="500px" />

        <nav>
          <button @click="addResource">Add resource</button>
        </nav>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <add-resource @close="closeModal" v-if="renderModal"></add-resource>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AddResource from "./components/AddResource";
export default {
  name: "app",
  components: {
    AddResource
  },
  data() {
    return {
      renderModal: false
    };
  },
  methods: {
    ...mapActions(["addResource"]),
    addResource() {
      this.renderModal = true;
    },
    closeModal() {
      this.renderModal = false;
    }
  }
};
</script>

<style lang="scss">
#app {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fafafa;
}

header {
  .wrap {
    max-width: 600px;
    margin: 0 auto;

    img {
      max-width: 100%;
    }

    nav {
      text-align: center;
      margin-top: 16px;
    }
  }

  button {
    padding: 8px 16px;
    background-color: #a3cf62;
    border-radius: 4px;
    border: 1px solid #a3cf62;
    cursor: pointer;
    font-size: 16px;
  }
}

main {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
