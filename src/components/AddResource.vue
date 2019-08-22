<template>
  <div class="modal-bg">
    <aside class="modal">
      <button class="close" @click="closeModal">&times;</button>
      <h2>Add a serverless resource</h2>
      <div class="add-resource">
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model="name" />
        </div>

        <div class="field">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            v-model="description"></textareaid="description">
        </div>

        <div class="field">
          <label for="link">Link</label>
          <input type="text" name="link" id="link" v-model="link" />
        </div>

        <div class="field">
          <button @click="submitLink">Share</button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "add-resource",
  data() {
    return {
      link: "",
      description: "",
      name: ""
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    async submitLink() {
      await this.$store.dispatch("addResource", {
        name: this.name,
        description: this.description,
        link: this.link
      });

      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-bg {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);

  .modal {
    background-color: white;
    padding: 16px;
    max-width: 700px;
    margin: 0 auto;
    border-radius: 4px;
    position: relative;
    margin-top: 200px;

    .close {
      border: none;
      font-size: 24px;
      background-color: transparent;
      cursor: pointer;
      float: right;
    }
  }
}

.add-resource {
  .field {
    margin-bottom: 16px;
    width: 400px;

    label {
      display: block;
    }

    input,
    textarea {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
      width: 100%;
    }

    textarea {
      font-family: Avenir;
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
}
</style>