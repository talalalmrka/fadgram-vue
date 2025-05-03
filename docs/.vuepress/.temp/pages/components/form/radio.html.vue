<template><div><h1 id="radio" tabindex="-1"><a class="header-anchor" href="#radio"><span>Radio</span></a></h1>
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
<td>Unique base ID used for each radio input.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string | null</code></td>
<td><code v-pre>null</code></td>
<td>Optional icon displayed with the fieldset label.</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Main label for the group of radio options.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Optional helper text shown below the radio group.</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message shown below the radio group.</td>
</tr>
<tr>
<td><code v-pre>options</code></td>
<td><code v-pre>Option[]</code></td>
<td><code v-pre>[]</code></td>
<td>List of selectable options with <code v-pre>{ value, label, disabled? }</code>.</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>string | number | undefined</code></td>
<td><code v-pre>null</code></td>
<td>The current selected value (must match one of the option values).</td>
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
<td><code v-pre>string | number</code></td>
<td>Emitted when a new option is selected.</td>
</tr>
</tbody>
</table>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgRadio <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="163" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-radio v-model="country" label="Select country" :options="options"/><p>Selected country: {{ country }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-radio</span></span>
<span class="line">  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>country<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select country<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">    {</span>
<span class="line">      label: 'United states',</span>
<span class="line">      value: 'us',</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: 'United kingdom',</span>
<span class="line">      value: 'uk',</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      label: 'Germany',</span>
<span class="line">      value: 'germany',</span>
<span class="line">    },</span>
<span class="line">  ]<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const country = ref('');
    const options = ref([
      {
        label: 'United states',
        value: 'us',
      },
      {
        label: 'United kingdom',
        value: 'uk',
      },
      {
        label: 'Germany',
        value: 'germany',
      }
    ]);
</script>