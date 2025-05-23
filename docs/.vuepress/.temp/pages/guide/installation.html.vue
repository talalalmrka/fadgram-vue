<template><div><h1 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h1>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i fadgram-vue@latest</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<h3 id="using-as-a-plugin" tabindex="-1"><a class="header-anchor" href="#using-as-a-plugin"><span>Using as a Plugin</span></a></h3>
<p>When you use a library as a plugin, you register it globally in your Vue app. This makes all the components and functionality provided by the library available throughout your application without needing to import them individually.</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> FadgramVue <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'fadgram-vue/dist/fadgram-vue.css'</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>FadgramVue<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>Advantages:
<ul>
<li>Simplifies usage since you don't need to import components individually.</li>
<li>Useful for libraries that provide global functionality (e.g., directives, mixins, or global components).</li>
</ul>
</li>
<li>Disadvantages:
<ul>
<li>Increases bundle size if you don't need all components.</li>
<li>Less control over what is included in your app.</li>
</ul>
</li>
</ul>
</div>
<h3 id="importing-specific-components" tabindex="-1"><a class="header-anchor" href="#importing-specific-components"><span>Importing Specific Components</span></a></h3>
<p>Example:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgAccordion<span class="token punctuation">,</span> FgAlert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span> <span class="token comment">// Import specific components</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Register the component locally or globally</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'FgAccordion'</span><span class="token punctuation">,</span> FgAccordion<span class="token punctuation">)</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'FgAlert'</span><span class="token punctuation">,</span> FgAlert<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ul>
<li>Advantages:
<ul>
<li>Reduces bundle size by only including the components you need.</li>
<li>Provides more control over your app's structure.</li>
</ul>
</li>
<li>Disadvantages:
<ul>
<li>Requires manual imports and registrations for each component.</li>
</ul>
</li>
</ul>
</div>
<h3 id="using-in-templates-example" tabindex="-1"><a class="header-anchor" href="#using-in-templates-example"><span>using in templates example</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion</span><span class="token punctuation">></span></span> ... <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-alert</span> <span class="token attr-name">...</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


