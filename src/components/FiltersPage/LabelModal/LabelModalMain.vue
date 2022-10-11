<script setup lang="ts">
import contentTitle from '../FilterModal/contentTitle.vue';
import modalOverlay from '../FilterModal/modalOverlay.vue';
import LabelModalBody from '../LabelModal/LabelModalBody.vue';
import LabelModalFooter from '../LabelModal/LabelModalFooter.vue'
</script>
<template>
    <modalOverlay>
        <div class="md:w-[30%]">
            <contentTitle>Add label</contentTitle>
            <LabelModalBody/>
            <LabelModalFooter/>
        </div>
    </modalOverlay>
</template>