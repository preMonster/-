import { initGlobalState } from "qiankun";
import store from "@/store";

const initialState = {
  count: 1, // 全局num
};

// 初始化 state
const actions = initGlobalState(initialState);

//  主应用监听state树改变
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
  store.commit("changeCount", state.count);
});

export default actions.setGlobalState;
