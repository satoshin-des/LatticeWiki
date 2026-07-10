<script setup lang="ts">
defineProps({
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    other: {
        type: String,
        required: false
    }
});
</script>

<template>
    <span>
        {{ author }}({{ year }}).
        <i>{{ title }}</i>.
        {{ other }}
    </span>
</template>
