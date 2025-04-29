import { CodeTabs } from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/user/Desktop/laravel-projects/fadgram-vue-vuepress/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
