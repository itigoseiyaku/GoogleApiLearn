import { defineStore } from "pinia";

type State = {
  /** ログイン済みかどうか */
  isLogin: boolean;
  /** ユーザー名 */
  username: string;
  /** メールアドレス */
  mail: string;
};

export const useAccountStore = defineStore("Account", {
  // arrow function recommended for full type inference
  state: (): State => {
    return {
      isLogin: false,
      username: "",
      mail: "",
    };
  },
  actions: {
    logout() {
      this.$reset();
    },
  },
});
