<script setup lang="ts">
    import {ref} from 'vue';
    import LabelSvg from './Svgs/LabelSvg.vue'
    import FavoritesSvg from './Svgs/FavoritesSvg.vue'
    import EditSvg from '../TodayPage/Svgs/EditSvg.vue'
    import MoreAction from '../TodayPage/Svgs/MoreAction.vue';
    let changesColor = ref<boolean>(false);
</script>

<template>
    <div class="md:ml-3 md:mt-1">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <LabelSvg/>
                <p class="text-sm"><slot></slot></p>
            </div>
            <div class="flex items-center filter">
                <FavoritesSvg :class="[changesColor ? 'text-red-500' : 'text-gray-500']" @click="changesColor = !changesColor"/>
                <EditSvg class="md:ml-1.5"/>
                <MoreAction class="md:ml-1.5"/>
            </div>
        </div>
        <div class="md:pl-2 md:mt-1"><hr></div>
    </div>
</template>