<template>
    <h1>
        <slot />
    </h1>
</template>

<style scoped>
h1 {
    font-family: var(--wiki-font-serif);
    font-size: 1.8rem;
    font-weight: normal;
    border-bottom: 1px solid var(--wiki-border-color);
    margin-bottom: 0.25em;
    padding-bottom: 0.17em;
    animation: slideInLeft 0.5s ease-out;
}
</style>
