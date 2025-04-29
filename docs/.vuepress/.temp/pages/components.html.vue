<template><div><h1 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h1>
<h2 id="alert" tabindex="-1"><a class="header-anchor" href="#alert"><span>Alert</span></a></h2>
<h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>installation</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgAlert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<ul>
<li><code v-pre>class: string</code> - (css class names) default null</li>
<li><code v-pre>atts:  Object</code> - of html attributes default: () =&gt; ({})</li>
<li><code v-pre>type: 'success' | 'error' | 'info' | 'warning'</code> - default info</li>
<li><code v-pre>soft: boolean</code> - default false</li>
<li><code v-pre>outline: boolean</code> - default false</li>
<li><code v-pre>success: boolean</code> - default false</li>
<li><code v-pre>info: boolean</code> - default false</li>
<li><code v-pre>warning: boolean</code> - default false</li>
<li><code v-pre>error: boolean</code> - default false</li>
<li><code v-pre>size: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl'</code> - default null</li>
<li><code v-pre>icon: string</code> — bootstrap icon name like (bi-star, bi-house-fill ...etc)</li>
<li><code v-pre>iconClass: string</code> — additional css classes for icon</li>
<li><code v-pre>content: string</code></li>
<li><code v-pre>hideIcon: boolean</code> - set true to hide icon</li>
</ul>
<h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Everything is great!<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-alert</span> <span class="token attr-name">success</span><span class="token punctuation">></span></span>Everything is great!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-alert</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox"><span>Checkbox</span></a></h2>
<h3 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1"><span>installation</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgCheckbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<ul>
<li><code v-pre>id: string</code></li>
<li><code v-pre>icon: string</code></li>
<li><code v-pre>label: string</code></li>
<li><code v-pre>info: string</code></li>
<li><code v-pre>error: string</code></li>
<li><code v-pre>modelValue: boolean</code></li>
<li><code v-pre>disabled: boolean</code></li>
</ul>
<h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Accept terms<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


