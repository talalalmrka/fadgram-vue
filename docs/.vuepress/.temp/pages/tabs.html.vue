<template><div><h1 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs"><span>Tabs</span></a></h1>
<Tabs id="4" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-accordion storageKey="accordion-default">
  <fg-accordion-item>
    <fg-accordion-head>
    Broadcast
    </fg-accordion-head>
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Coding
    </fg-accordion-head>
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item>
    <fg-accordion-head>
        Livestream
    </fg-accordion-head>
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-accordion</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> storageKey</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"accordion-default"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    Broadcast</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Broadcasting allows you to share live updates with your audience in real-time.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Engage with your viewers through interactive and dynamic content delivery.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Coding</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Explore the world of coding to unlock endless possibilities and bring your ideas to life.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Livestream</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-head></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        Share your moments, events, or tutorials live and build a stronger connection with your viewers.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;/fg-accordion-body></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/fg-accordion-item></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fg-accordion</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { FgAccordion, FgAccordionItem, FgAccordionHead, FgAccordionBody } from '../../../../src/components'
</script>