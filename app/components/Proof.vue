<script setup>
defineProps({
    label: {
        type: String,
        required: false
    }
});
</script>

<template>
    <details class="wiki-proof">
        <summary>証明{{ label }}</summary>
        <div class="proof">
            <slot />
        </div>
    </details>
</template>

<style lang="css" scoped>
div {
    margin: 1em 0;
    padding: 10px 20px;
    border-left: 3px double #a2a9b1;
    font-style: normal;
    font-size: 0.95em;
    background-color: white;
}

div::before {
    font-weight: bold;
    margin-right: 0.5em;
}

div::after {
    content: "□";
    float: right;
    color: var(--wiki-border-color);
}

details {
    margin: 1em 0;
    border: 1px solid #a2a9b1;
    background-color: #fff;
    border-radius: 2px;
    overflow: hidden;
}

details summary {
    background-color: #eaecf0;
    padding: 8px 15px;
    font-weight: bold;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
    user-select: none;
}

details summary:hover {
    background-color: #ddeecc;
}

details summary::-webkit-details-marker {
    display: none;
}

details summary::after {
    content: "＋";
    /* 閉じている時 */
    font-size: 12px;
    color: #555;
    margin-left: 10px;
}

details[open] summary {
    border-bottom: 1px solid #a2a9b1;
}

details[open] summary::after {
    content: "－";
}
</style>