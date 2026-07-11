<script setup>
import {ref} from 'vue';
import VueMathjax from 'vue-mathjax-next';

const macros = ref('\\newcommand{\\dv}[1]{\\frac{\\mathrm{d}}{\\mathrm{d}#1}}\\newcommand{\\span}[1]{\\operatorname{span}(#1)}\\newcommand{\\vol}[1]{\\operatorname{vol}(#1)}\\newcommand{\\R}{\\mathbb{R}}\\newcommand{\\N}{\\mathbb{N}}\\newcommand{\\rotin}{\\style{display: inline-block; transform: rotate(270deg)}{\\in}}\\newcommand{\\bm}[1]{\\boldsymbol{#1}}\\newcommand{\\norm}[1]{\\left\\|#1\\right\\|}\\newcommand{\\od}[1]{\\mathrm{od}\\left(#1\\right)}');

defineProps({
    f: {
        type: String,
        required: true
    },
    inline: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <span v-if="inline">
        <vue-mathjax :formula="`\(${macros}${f}\)`" />
    </span>
    <div v-else>
        <vue-mathjax :formula="`$$${macros}${f}$$`" />
    </div>
</template>
