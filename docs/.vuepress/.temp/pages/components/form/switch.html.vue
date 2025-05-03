<template><div><h1 id="switch-toggle" tabindex="-1"><a class="header-anchor" href="#switch-toggle"><span>Switch (Toggle)</span></a></h1>
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
<h2 id="emits" tabindex="-1"><a class="header-anchor" href="#emits"><span>Emits</span></a></h2>
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
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgSwitch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="191" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-switch v-model="remember" label="Remember Me."/><p>remember: {{ remember }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-switch</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>remember<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Remember Me.<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const remember = ref(false);
</script>