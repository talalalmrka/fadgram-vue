import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "/Users/user/Desktop/laravel-projects/fadgram-vue/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
