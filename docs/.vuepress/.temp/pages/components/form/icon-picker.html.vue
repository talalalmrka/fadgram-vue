<template><div><h1 id="icon-picker" tabindex="-1"><a class="header-anchor" href="#icon-picker"><span>Icon Picker</span></a></h1>
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
<td>Unique ID for the input element.</td>
</tr>
<tr>
<td><code v-pre>name</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Name attribute for the input.</td>
</tr>
<tr>
<td><code v-pre>modelValue</code></td>
<td><code v-pre>string | null</code></td>
<td><code v-pre>null</code></td>
<td>Currently selected icon (prefixed with <code v-pre>bi-</code>).</td>
</tr>
<tr>
<td><code v-pre>icon</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Icon to display with the label.</td>
</tr>
<tr>
<td><code v-pre>label</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Field label text.</td>
</tr>
<tr>
<td><code v-pre>placeholder</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Input placeholder text.</td>
</tr>
<tr>
<td><code v-pre>autofocus</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether to focus the input on mount.</td>
</tr>
<tr>
<td><code v-pre>autocomplete</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Autocomplete attribute for the input.</td>
</tr>
<tr>
<td><code v-pre>required</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether the input is required.</td>
</tr>
<tr>
<td><code v-pre>disabled</code></td>
<td><code v-pre>boolean</code></td>
<td><code v-pre>false</code></td>
<td>Whether the input is disabled.</td>
</tr>
<tr>
<td><code v-pre>inputClass</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Additional CSS classes for the input.</td>
</tr>
<tr>
<td><code v-pre>atts</code></td>
<td><code v-pre>Record&lt;string, unknown&gt;</code></td>
<td><code v-pre>{}</code></td>
<td>Extra HTML attributes for the input.</td>
</tr>
<tr>
<td><code v-pre>info</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Info/help text shown below the field.</td>
</tr>
<tr>
<td><code v-pre>containerClass</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Additional classes for the dropdown container.</td>
</tr>
<tr>
<td><code v-pre>containerAtts</code></td>
<td><code v-pre>Record&lt;string, unknown&gt;</code></td>
<td><code v-pre>{}</code></td>
<td>Extra HTML attributes for the container.</td>
</tr>
<tr>
<td><code v-pre>groupClass</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Additional classes for the input group.</td>
</tr>
<tr>
<td><code v-pre>groupAtts</code></td>
<td><code v-pre>Record&lt;string, unknown&gt;</code></td>
<td><code v-pre>{}</code></td>
<td>Extra HTML attributes for the input group.</td>
</tr>
<tr>
<td><code v-pre>dropdownClass</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Additional classes for the dropdown.</td>
</tr>
<tr>
<td><code v-pre>dropdownAtts</code></td>
<td><code v-pre>Record&lt;string, unknown&gt;</code></td>
<td><code v-pre>{}</code></td>
<td>Extra HTML attributes for the dropdown.</td>
</tr>
<tr>
<td><code v-pre>size</code></td>
<td><code v-pre>string | null</code></td>
<td>-</td>
<td>Input size (used in styling).</td>
</tr>
<tr>
<td><code v-pre>icons</code></td>
<td><code v-pre>string[]</code></td>
<td>All <code v-pre>bi</code> icons</td>
<td>Optional icon list to filter/search from.</td>
</tr>
<tr>
<td><code v-pre>perPage</code></td>
<td><code v-pre>number</code></td>
<td><code v-pre>25</code></td>
<td>Number of icons per page.</td>
</tr>
<tr>
<td><code v-pre>noIconsFound</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'No icons found'</code></td>
<td>Message to show when no icons match search.</td>
</tr>
<tr>
<td><code v-pre>searchPlaceholder</code></td>
<td><code v-pre>string</code></td>
<td><code v-pre>'Search...'</code></td>
<td>Placeholder text for search input.</td>
</tr>
<tr>
<td><code v-pre>error</code></td>
<td><code v-pre>string</code></td>
<td>-</td>
<td>Error message shown below the input.</td>
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
<td><code v-pre>string</code></td>
<td>Emitted when an icon is selected or cleared.</td>
</tr>
<tr>
<td><code v-pre>change</code></td>
<td><code v-pre>string</code></td>
<td>Emitted immediately when <code v-pre>modelValue</code> changes.</td>
</tr>
</tbody>
</table>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2>
<div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">FgIconPicker</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> 'fadgram-vue'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2>
<Tabs id="426" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-icon-picker v-model="icon" label="Select icon"/><p>Selected icon: {{ icon }}</p>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-icon-picker</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> v-model</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">icon</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Select icon"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { ref } from 'vue';
    const icon = ref('');
</script>