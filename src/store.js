import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cheerio from "cheerio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    resources: []
  },
  mutations: {
    SAVE_RESOURCES(state, resources) {
      state.resources = resources;
    },
    ADD_RESOURCE(state, resource) {
      state.resources.push(resource);
    }
  },
  actions: {
    async getResources({ commit }) {
      const result = await axios.get(process.env.VUE_APP_RESOURCE_API_URL);
      commit("SAVE_RESOURCES", result.data);
      return result.data;
    },
    async addResource({ commit }, resource) {
      console.log("action");
      const result = await axios.post(
        process.env.VUE_APP_RESOURCE_API_URL,
        resource
      );

      commit("ADD_RESOURCE", result.data);
    }
  }
});
