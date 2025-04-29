<template><div><h2 id="select" tabindex="-1"><a class="header-anchor" href="#select"><span>Select</span></a></h2>
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
<td>Unique identifier for the select element.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Icon to display in the label (<code v-pre>FgLabel</code>).</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Label text displayed above the select field.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Additional hint or info displayed below the select (<code v-pre>FgInfo</code>).</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message to show below the select (<code v-pre>FgError</code>).</td>
</tr>
<tr>
<td><code v-pre>options</code></td>
<td><code v-pre>Array&lt;{ value: string | number; label: string }&gt;</code></td>
<td><code v-pre>[]</code></td>
<td>List of selectable options with value and label fields.</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>string | number | null</code></td>
<td><code v-pre>null</code></td>
<td>Bound value of the select input. Supports v-model.</td>
</tr>
<tr>
<td><code v-pre>placeholder</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Placeholder text shown as an initial unselectable option.</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Disables the entire select input if <code v-pre>true</code>.</td>
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
<td><code v-pre>string | number | null</code></td>
<td>Emitted when the selected value is updated.</td>
</tr>
</tbody>
</table>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h3>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">FgSelect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'fadgram-vue'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h3>
<Tabs id="191" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-select v-model="aiModel" label="AI model" placeholder="Select your model" :options="options"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">aiModel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"AI model"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> placeholder</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Select your model"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> :</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        label</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Gpt"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'gpt'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        label</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Copilot"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'copilot'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        label</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Gemini"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'gemini'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        label</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "Grok"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">        value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'grok'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">/></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const options = ref([
        {
            label: "Gpt",
            value: 'gpt',
        },
        {
            label:"Copilot",
            value: 'copilot',
        },
        {
            label: "Gemini",
            value: 'gemini'
        },
        {
            label: "Grok",
            value: 'grok',
        },
    ]);

    const aiModel = ref('');
</script>