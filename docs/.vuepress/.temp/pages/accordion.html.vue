<template><div><h1 id="accordion" tabindex="-1"><a class="header-anchor" href="#accordion"><span>Accordion</span></a></h1>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FgAccordion<span class="token punctuation">,</span> FgAccordionItem<span class="token punctuation">,</span> FgAccordionHead<span class="token punctuation">,</span> FgAccordionBody <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'fadgram-vue'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2>
<ul>
<li><code v-pre>mode: string</code> — (single, multiple) default single</li>
<li><code v-pre>multiple: boolean</code> — default false</li>
<li><code v-pre>storageKey: string</code> — (to store acccordion state in local storage)default fg-accordion</li>
<li><code v-pre>persist: boolean</code> - default true</li>
</ul>
<h2 id="available-components" tabindex="-1"><a class="header-anchor" href="#available-components"><span>Available components</span></a></h2>
<ul>
<li><code v-pre>FgAccordion</code></li>
<li><code v-pre>FgAccordionItem</code></li>
<li><code v-pre>FgAccordionHead</code></li>
<li><code v-pre>FgAccordionBody</code></li>
</ul>
<h2 id="basic-example" tabindex="-1"><a class="header-anchor" href="#basic-example"><span>Basic Example</span></a></h2>
<Tabs id="61" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-accordion>
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
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Broadcast <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Broadcasting allows you to share live updates with your audience in real-time. Engage with</span>
<span class="line">      your viewers through interactive and dynamic content delivery.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Coding <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Coding is the process of creating instructions for computers using programming languages. It</span>
<span class="line">      enables the development of software, websites, and applications that power modern technology.</span>
<span class="line">      Explore the world of coding to unlock endless possibilities and bring your ideas to life.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Livestream <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Livestreaming is a powerful way to connect with your audience in real-time, enabling</span>
<span class="line">      interactive and engaging experiences. Share your moments, events, or tutorials live and build</span>
<span class="line">      a stronger connection with your viewers.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>Multiple</span></a></h2>
<Tabs id="72" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-accordion multiple>
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
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Broadcast <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Broadcasting allows you to share live updates with your audience in real-time. Engage with</span>
<span class="line">      your viewers through interactive and dynamic content delivery.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Coding <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Coding is the process of creating instructions for computers using programming languages. It</span>
<span class="line">      enables the development of software, websites, and applications that power modern technology.</span>
<span class="line">      Explore the world of coding to unlock endless possibilities and bring your ideas to life.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Livestream <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Livestreaming is a powerful way to connect with your audience in real-time, enabling</span>
<span class="line">      interactive and engaging experiences. Share your moments, events, or tutorials live and build</span>
<span class="line">      a stronger connection with your viewers.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="persist" tabindex="-1"><a class="header-anchor" href="#persist"><span>Persist</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>This accordion will remember the opened items using <code v-pre>storageKey</code> to see the feature open an item and refresh the page</p>
</div>
<Tabs id="88" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-accordion storageKey="accordion-persist" persist>
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
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion</span> <span class="token attr-name">storageKey</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-persist<span class="token punctuation">"</span></span> <span class="token attr-name">persist</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Broadcast <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Broadcasting allows you to share live updates with your audience in real-time. Engage with</span>
<span class="line">      your viewers through interactive and dynamic content delivery.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Coding <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Coding is the process of creating instructions for computers using programming languages. It</span>
<span class="line">      enables the development of software, websites, and applications that power modern technology.</span>
<span class="line">      Explore the world of coding to unlock endless possibilities and bring your ideas to life.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-head</span><span class="token punctuation">></span></span> Livestream <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">      Livestreaming is a powerful way to connect with your audience in real-time, enabling</span>
<span class="line">      interactive and engaging experiences. Share your moments, events, or tutorials live and build</span>
<span class="line">      a stronger connection with your viewers.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="accordion-item" tabindex="-1"><a class="header-anchor" href="#accordion-item"><span>Accordion Item</span></a></h2>
<h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1"><span>Props</span></a></h3>
<ul>
<li><code v-pre>id?: string</code></li>
<li><code v-pre>title?: string</code> — if setted you dont need to add FgAccordionHead it will automatically include it</li>
<li><code v-pre>icon?: string</code> — bootstrap icon name to display it before title like (bi-star, bi-house-fill ...etc)</li>
</ul>
<h3 id="shortness-accordion-item-head" tabindex="-1"><a class="header-anchor" href="#shortness-accordion-item-head"><span>Shortness accordion item head</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>you can add the title and title icon directly to the accordion item and it will create accordion head automatically</p>
</div>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<Tabs id="130" :data='[{"id":"Preview"},{"id":"vue"}]' :active="0">
<template #title0="{ value, isActive }">Preview</template>
<template #title1="{ value, isActive }">vue</template>
<template #tab0="{ value, isActive }">
<fg-accordion>
  <fg-accordion-item icon="bi-broadcast" title="Broadcast">
    <fg-accordion-body>
        Broadcasting allows you to share live updates with your audience in real-time.
        Engage with your viewers through interactive and dynamic content delivery.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-code" title="Coding">
    <fg-accordion-body>
        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.
        Explore the world of coding to unlock endless possibilities and bring your ideas to life.
    </fg-accordion-body>
  </fg-accordion-item>
  <fg-accordion-item icon="bi-camera-video-fill" title="Livestream">
    <fg-accordion-body>
        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.
        Share your moments, events, or tutorials live and build a stronger connection with your viewers.
    </fg-accordion-body>
  </fg-accordion-item>
</fg-accordion>
</template>
<template #tab1="{ value, isActive }">
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-broadcast<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Broadcast<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">        Broadcasting allows you to share live updates with your audience in real-time.</span>
<span class="line">        Engage with your viewers through interactive and dynamic content delivery.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-code<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Coding<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">        Coding is the process of creating instructions for computers using programming languages. It enables the development of software, websites, and applications that power modern technology.</span>
<span class="line">        Explore the world of coding to unlock endless possibilities and bring your ideas to life.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-item</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi-camera-video-fill<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Livestream<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">        Livestreaming is a powerful way to connect with your audience in real-time, enabling interactive and engaging experiences.</span>
<span class="line">        Share your moments, events, or tutorials live and build a stronger connection with your viewers.</span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion-item</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fg-accordion</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
</div></template>


<script setup lang="ts">
    import { FgAccordion, FgAccordionItem, FgAccordionHead, FgAccordionBody } from '../../../../src/components'
</script>