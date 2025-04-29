<template><div><h2 id="switch-toggle" tabindex="-1"><a class="header-anchor" href="#switch-toggle"><span>Switch (Toggle)</span></a></h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3>
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
<td>Unique ID for the toggle input.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string | null</code></td>
<td><code v-pre>null</code></td>
<td>Optional icon to display beside the label.</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Text label shown beside the toggle.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Optional helper text shown below the toggle.</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message displayed below the toggle.</td>
</tr>
<tr>
<td><code v-pre>value</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>Value to emit when toggle is turned on (used in single or group mode).</td>
</tr>
<tr>
<td><code v-pre>uncheckedValue</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>Value to emit when toggle is turned off (used in single mode).</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>The current value (can be boolean, value, or array of values).</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether the toggle is disabled.</td>
</tr>
</tbody>
</table>
<h3 id="emits" tabindex="-1"><a class="header-anchor" href="#emits"><span>Emits</span></a></h3>
<table>
<thead>
<tr>
<th>Event</th>
<th>Payload Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>update:modelValue</code></td>
<td><code v-pre>any</code></td>
<td>Emitted when the toggle is changed with the new value.</td>
</tr>
</tbody>
</table>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h3>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">FgAwitch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'fadgram-vue'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h3>
<Tabs id="191" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-switch v-model="remember" label="Remember Me."/><p>remember: {{ remember }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-switch</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">remember</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Remember Me."</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const remember = ref(false);
</script>