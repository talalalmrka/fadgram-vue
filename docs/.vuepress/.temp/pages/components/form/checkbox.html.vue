<template><div><h1 id="checkbox" tabindex="-1"><a class="header-anchor" href="#checkbox"><span>Checkbox</span></a></h1>
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
<td>The unique identifier for the checkbox input.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Optional icon to display with the label.</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Text label for the checkbox.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Additional helper text shown below the field.</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message shown below the field.</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>The current value. Can be a boolean, single value, or array (for groups).</td>
</tr>
<tr>
<td><code v-pre>value</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>The value to emit when checked (used in single or group mode).</td>
</tr>
<tr>
<td><code v-pre>uncheckedValue</code></td>
<td><code v-pre>any</code></td>
<td>-</td>
<td>The value to emit when unchecked (used in single mode only).</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether the checkbox is disabled.</td>
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
<td>Emitted with the new value when the checkbox is toggled.</td>
</tr>
</tbody>
</table>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgCheckbox <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="191" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-checkbox v-model="agree" label="Agree policy"/><p>agree: {{ agree }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>agree<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Agree policy<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const agree = ref(false);
</script>