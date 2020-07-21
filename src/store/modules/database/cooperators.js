export default {
  state: {
    cooperators: null,
  },
  getters: {},
  mutations: {
    setCooperators(state, payload) {
      state.cooperators = payload;
    },
  },
  actions: {
    createCooperators({ dispatch }, payload) {
      payload = Object.assign(payload, { collection: "cooperators" });

      let docId = dispatch("createObject", payload)
        .then((doc) => {
          return doc.id;
        })
        .catch((err) => {
          console.error("Error ", err);
        });

      return docId;
    },
    async getCooperators({ dispatch, commit }, payload) {
      payload = Object.assign(payload, { collection: "cooperators" });

      let coop = await dispatch("getObject", payload);
      commit("setCooperators", coop);
    },
    pushCooperator({ dispatch }, payload) {
      payload = Object.assign(payload, {
        collection: "cooperators",
        param: "cooperators",
      });

      dispatch("pushObject", payload).catch((err) => {
        console.error("Error pushing", err);
      });
    },
    updateCooperator({ dispatch }, payload) {
      payload = Object.assign(payload, {
        collection: "cooperators",
        field: "cooperators",
        identifier: "id",
      });
      dispatch("updateArrayElement", payload).catch((err) => {
        console.error("Error updating element", err);
      });
    },
    removeCooperator({ dispatch }, payload) {
      payload = Object.assign(payload, {
        collection: "cooperators",
        param: "cooperators",
      });
      dispatch("removeObject", payload).catch((err) => {
        console.error("Error ", err);
      });
    },
    deleteCooperators({ dispatch }, payload) {
      payload = Object.assign(payload, { collection: "cooperators" });

      dispatch("deleteObject", payload).catch((err) => {
        console.error("Error ", err);
      });
    },
  },
};