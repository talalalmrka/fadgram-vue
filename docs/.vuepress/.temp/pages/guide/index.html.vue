<template><div><h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start"><span>Quick start</span></a></h2>
<p>Fadgram Vue is a comprehensive Vue 3 components package designed to streamline your development process. It offers a wide range of customizable and accessible UI components, including inputs, selects, checkboxes, switches, textareas, alerts, and more. With built-in support for icons, sizes, and various styles, Fadgram Vue empowers developers to create modern and responsive user interfaces effortlessly.</p>
<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements</span></a></h2>
<ul>
<li>Vue 3.x</li>
<li>Node.js (LTS version recommended)</li>
<li>npm or yarn (for package management)</li>
<li>Basic knowledge of Vue.js and TypeScript</li>
<li>Tailwindcss 4</li>
</ul>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i fadgram-vue</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2>
<p>After installation, you can import and use the components in your Vue app:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgAccordion<span class="token punctuation">,</span> FgAlert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Example usage:</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-input</span></span>
<span class="line">    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Username<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">startIcon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-person-fill<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Enter your name<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


