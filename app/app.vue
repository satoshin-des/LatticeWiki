<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
:root {
  --wiki-font-serif: 'Linux Libertine', 'Georgia', 'Times', serif;
  --wiki-font-sans: sans-serif;
  --wiki-link-color: #36c;
  --wiki-border-color: #a2a9b1;
  --wiki-bg-gray: #f8f9fa;
  --wiki-text-main: #202122;
}

body {
  background-color: #ffffff;
  color: var(--wiki-text-main);
  font-family: var(--wiki-font-sans);
  line-height: 1.6;
  margin: 0;
  padding: 40px;
  max-width: 960px;
}
</style>