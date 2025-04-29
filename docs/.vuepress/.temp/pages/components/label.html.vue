<template><div><h2 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>Label</span></a></h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
<table>
<thead>
<tr>
<th>Prop</th>
<th>Type</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>null</code></td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string | boolean | null</code></td>
<td><code v-pre>null</code></td>
</tr>
</tbody>
</table>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h3>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">FgLabel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'fadgram-vue'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h3>
<Tabs id="63" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-label label="Form label"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-label</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Form label"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="label-with-icon" tabindex="-1"><a class="header-anchor" href="#label-with-icon"><span>Label with icon</span></a></h3>
<Tabs id="75" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-label icon="bi-person-fill" label="Username"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-label</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> icon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"bi-person-fill"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Username"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="label-error" tabindex="-1"><a class="header-anchor" href="#label-error"><span>Label error</span></a></h3>
<Tabs id="87" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-label label="Error label" :error="true"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-label</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Error label"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">error</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


