import store from "@/store";

const apps = [
  {
    name: "vueApp",
    entry: "//localhost:10002",
    container: "#container",
    activeRule: "/app-vue",
    props: {
      propStore: store,
    },
  },
  {
    name: "reactApp",
    entry: "//localhost:10003",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "staticApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/app-static",
  },
];
export default apps;
