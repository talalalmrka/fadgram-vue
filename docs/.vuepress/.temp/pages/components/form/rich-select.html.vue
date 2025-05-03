<template><div><h1 id="rich-select" tabindex="-1"><a class="header-anchor" href="#rich-select"><span>Rich Select</span></a></h1>
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
<td>Unique identifier for the select element.</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Icon displayed in the label (<code v-pre>FgLabel</code>).</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Label text above the select.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Additional hint or info below the field.</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message shown below the field.</td>
</tr>
<tr>
<td><code v-pre>options</code></td>
<td><code v-pre>Array&lt;{ value: string | number; label: string; icon?: string; disabled?: boolean }&gt;</code></td>
<td><code v-pre>[]</code></td>
<td>List of selectable options. Icons and disabled options are supported.</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>string | number | null</code></td>
<td><code v-pre>null</code></td>
<td>Currently selected value. Supports v-model.</td>
</tr>
<tr>
<td><code v-pre>placeholder</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'Select an option'</code></td>
<td>Placeholder text shown when no value is selected.</td>
</tr>
<tr>
<td><code v-pre>searchable</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>Whether to enable the search field.</td>
</tr>
<tr>
<td><code v-pre>searchPlaceholder</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'Search...'</code></td>
<td>Placeholder text for the search input.</td>
</tr>
<tr>
<td><code v-pre>clearable</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>true</code></td>
<td>Whether the selected option can be cleared.</td>
</tr>
<tr>
<td><code v-pre>noResults</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'No results found'</code></td>
<td>Message to show when no options match the search term.</td>
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
<td><code v-pre>string | number | null</code></td>
<td>Emitted when an option is selected or cleared.</td>
</tr>
</tbody>
</table>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgRichSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="233" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-rich-select v-model="aiModel" label="AI model" placeholder="Select your model" :options="options"/></template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-rich-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aiModel<span class="token punctuation">"</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AI model<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Select your model<span class="token punctuation">"</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[</span>
<span class="line">    {</span>
<span class="line">        label: <span class="token punctuation">"</span></span><span class="token attr-name">Gpt",</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">value:</span></span> <span class="token attr-name">'gpt',</span></span>
<span class="line">    <span class="token attr-name">},</span></span>
<span class="line">    <span class="token attr-name">{</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">label:</span></span> <span class="token attr-name">"Copilot",</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">value:</span></span> <span class="token attr-name">'copilot',</span></span>
<span class="line">    <span class="token attr-name">},</span></span>
<span class="line">    <span class="token attr-name">{</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">label:</span></span> <span class="token attr-name">"Gemini",</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">value:</span></span> <span class="token attr-name">'gemini',</span></span>
<span class="line">    <span class="token attr-name">},</span></span>
<span class="line">    <span class="token attr-name">{</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">label:</span></span> <span class="token attr-name">"Grok",</span></span>
<span class="line">        <span class="token attr-name"><span class="token namespace">value:</span></span> <span class="token attr-name">'grok',</span></span>
<span class="line">    <span class="token attr-name">},</span></span>
<span class="line"><span class="token attr-name">]"</span><span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
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