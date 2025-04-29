<template><div><h1 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>Input</span></a></h1>
<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td><code v-pre>string</code></td>
<td>Auto-generated</td>
<td>The unique identifier for the input field.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>The icon used in the label (passed to <code v-pre>FgLabel</code>).</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>The label text for the input field.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Additional information or hint displayed below the input (<code v-pre>FgInfo</code>).</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message to display (<code v-pre>FgError</code>).</td>
</tr>
<tr>
<td><code v-pre>size</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>the input size (<code v-pre>xs</code>, <code v-pre>sm</code>, <code v-pre>lg</code>, <code v-pre>xl</code>, 'xxl')</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>string | number</code></td>
<td><code v-pre>''</code></td>
<td>The bound value of the input field. Supports v-model.</td>
</tr>
<tr>
<td><code v-pre>placeholder</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Placeholder text for the input.</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether the input field is disabled.</td>
</tr>
<tr>
<td><code v-pre>type</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'text'</code></td>
<td>Input type (e.g., <code v-pre>text</code>, <code v-pre>password</code>, <code v-pre>email</code>).</td>
</tr>
<tr>
<td><code v-pre>startIcon</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>null</code></td>
<td>Icon class to display at the start of the input (e.g., <code v-pre>bi-person-fill</code>).</td>
</tr>
<tr>
<td><code v-pre>endIcon</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>null</code></td>
<td>Icon class to display at the end of the input (e.g., <code v-pre>bi-eye-fill</code>).</td>
</tr>
</tbody>
</table>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">FgInput</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'fadgram-vue'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="202" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="username" placeholder="insert username"/><p>username: {{ username }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert username"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-label-info" tabindex="-1"><a class="header-anchor" href="#input-label-info"><span>Input label &amp; info</span></a></h2>
<Tabs id="217" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="username" label="username" placeholder="insert username" info="this is input info"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"username"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert username"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  info</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"this is input info"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-label-icon" tabindex="-1"><a class="header-anchor" href="#input-label-icon"><span>Input label icon</span></a></h2>
<Tabs id="229" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="username" icon="bi-person-fill" label="username" placeholder="insert username"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  icon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-person-fill"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"username"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert username"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-error" tabindex="-1"><a class="header-anchor" href="#input-error"><span>Input error</span></a></h2>
<Tabs id="241" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="username" label="username" placeholder="insert username" error="Invalid username!"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">username</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"username"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert username"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Invalid username!"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-starticon" tabindex="-1"><a class="header-anchor" href="#input-starticon"><span>Input startIcon</span></a></h2>
<Tabs id="253" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="url" label="url" placeholder="insert url" startIcon="bi-globe"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"url"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert url"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> startIcon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-globe"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-endicon" tabindex="-1"><a class="header-anchor" href="#input-endicon"><span>Input endIcon</span></a></h2>
<Tabs id="265" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="url" label="url" placeholder="insert url" endIcon="bi-clipboard"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"url"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert url"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> endIcon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-clipboard"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-with-starticon-endicon" tabindex="-1"><a class="header-anchor" href="#input-with-starticon-endicon"><span>Input with startIcon &amp; endIcon</span></a></h2>
<Tabs id="277" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-input type="text" v-model="url" label="url" placeholder="insert url" startIcon="bi-globe" endIcon="bi-clipboard"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"url"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"insert url"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  startIcon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-globe"</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66">  endIcon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-clipboard"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="input-size" tabindex="-1"><a class="header-anchor" href="#input-size"><span>Input size</span></a></h2>
<Tabs id="289" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<div class="space-y-2">
<fg-input v-for="size in inputSizes" type="text" :size="size" :placeholder="size"/>
</div>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xs"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xs"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sm"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sm"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"lg"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"lg"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xl"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xxl"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"xxl"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue'
    const username = ref('')
    const url = ref('')
    const inputSizes = ref([
        'xs',
        'sm',
        'lg',
        'xl',
        'xxl',
    ])
</script>