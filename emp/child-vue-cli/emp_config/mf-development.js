module.exports = {
  name: "vue2Base",
  filename: "emp.js",
  remotes: {},
  exposes: {
    "./HelloWorld": "./src/components/HelloWorld",
  },
  shared: ["vue/dist/vue.esm.js"],
};
