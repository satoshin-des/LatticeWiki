<script setup lang="ts">
defineProps({
    caption: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    input: {
        type: String,
        required: false
    },
    output: {
        type: String,
        required: false
    }
});
</script>

<template>
    <div class="algorithm-box">
        <span class="algorithm-caption">{{ caption }}
        </span>
        <code>
<span class="kw">Input:</span> {{ input }}<br>
<span class="kw">Output:</span> {{ output }}<br>

<span class="kw">function</span> <span class="fn">{{ label }}</span><br>
            <slot />
    </code>
    </div>
</template>

<style lang="css" scoped>
.algorithm-box {
    background-color: #f8f9fa;
    border: 1px solid #a2a9b1;
    border-left: 5px solid #666;
    border-radius: 2px;
    margin: 1.5em 0;
    padding: 15px 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    overflow-x: auto;
}

.algorithm-caption {
    font-family: var(--wiki-font-sans, sans-serif);
    font-weight: bold;
    border-bottom: 1px solid #eaecf0;
    margin-bottom: 10px;
    padding-bottom: 5px;
    display: block;
    color: #000;
}

.algorithm-box code {
    display: block;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #202122;
    white-space: pre;
}

.kw {
    font-weight: bold;
    color: #000;
}

.fn {
    color: #0645ad;
}

.com {
    color: #72777d;
    /* グレー */
    font-style: italic;
}

.num {
    color: #880000;
}
</style>