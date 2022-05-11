// index.js（主应用入口处）

import Garfish from "garfish";
Garfish.run({
  basename: "/",
  domGetter: "#subApp",
  apps: [
    {
      name: "vue",
      activeWhen: "/vue",
      entry: "http://localhost:10002", // js入口
    },
  ],
});
