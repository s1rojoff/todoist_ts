<script setup lang="ts">
    import SoroqSvg from '../../TodayPage/Svgs/SoroqSvg.vue'
</script>

<template>
    <div class="bg-gray-100 md:pb-3 flex items-center justify-between md:pl-6 md:pr-6 md:pt-3 rounded-t-xl">
        <p class="font-bold"><slot></slot></p>
        <SoroqSvg/>
    </div>
</template>