import { GitContributors } from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
  },
};
