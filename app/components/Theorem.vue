<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div>
        <span>{{ label }}</span>
        <slot />
    </div>
</template>

<style scoped>
div {
    border-left-color: #36c;
    background-color: #f0f4f8;
}

span {
    font-weight: bold;
    font-family: var(--wiki-font-sans);
    margin-bottom: 0.5em;
    display: block;
    font-size: 0.95em;
    color: #202122;
}
</style>