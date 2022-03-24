import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun"; // 微应用注册信息
import apps from "./app";

registerMicroApps(apps, {
  beforeLoad: (app) => {
    console.log("before load", app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    console.error("微应用加载失败，请检查应用是否可运行");
  }
});
export default start;
