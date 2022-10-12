<script setup lang="ts">
    import {useStore} from "../../../store/index";
    import contentTitle from '../FilterModal/contentTitle.vue'
    import contentBody from '../FilterModal/contentBody.vue';
    import contentFooter from '../FilterModal/contentFooter.vue';
    const store = useStore();
</script>

<template>
<div class="md:w-[30%]">
    <contentTitle>Add Filter</contentTitle>
    <contentBody/>
    <contentFooter/>
</div>
</template>