<script setup lang="ts">
    import {defineProps, useAttrs,ref} from 'vue'
    import FilterSvg from './Svgs/FilterSvg.vue'
    import FavoritesSvg from './Svgs/FavoritesSvg.vue'
    import EditSvg from '../TodayPage/Svgs/EditSvg.vue'
    import MoreAction from '../TodayPage/Svgs/MoreAction.vue'
    import stringifier from "postcss/lib/stringifier";
    const props = defineProps(['color']);
    let filterLike = ref<string>('');

</script>

<template>
    <div class="md:ml-3">
        <div class="flex items-center justify-between md:mt-3">
            <div class="flex items-center">
                <FilterSvg :class="props.color"/>
                <p class="text-sm"><slot></slot></p>
            </div>
            <div class="flex items-center filter">
                <FavoritesSvg @click="filterLike = !filterLike" :class="[filterLike ? 'text-red-500' : 'text-gray-500']"/>
                <EditSvg class="md:ml-1.5"/>
                <MoreAction class="md:ml-1.5"/>
            </div>
        </div>
        <div class="md:pl-2 md:mt-1"><hr></div>
    </div>
</template>
<style>
    .filter{
        opacity: 0;
    }
    .filter:hover{
        opacity: 1;
    }
</style>