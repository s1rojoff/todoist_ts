<script setup lang="ts">
    import {defineEmits, reactive} from 'vue'
    import {useStore} from "../../../store/index";
    import checkbox from '../../MainComponents/Checkbox.vue'
    import ActiveAdd from '../../MainComponents/ActiveAdd.vue';
    const store = useStore();
    interface Filter{
        name: string,
        query: string,
        index: number
    }
    function addFilterItem() {
        let filter:Filter =reactive({
            name: store.filterName,
            query: store.filterQuery,
            index: store.filterColorIndex
        });
        store.showFilterModal = false;
        store.filterItems.push(filter);
        store.filterName = '';
        store.filterQuery = '';
        store.filterColorIndex = 0;
    }
</script>
<template>
    <div class="bg-white md:pl-5 md:pr-5 rounded-b-xl">
        <div class="pt-4 md:pb-5">
            <div class="flex items-center">
                <checkbox/>
                <p class="text-sm md:ml-1">Add to favorites</p>
            </div>
        </div>
        <hr>
        <div class="flex items-center justify-end md:pt-4 md:pb-4">
            <ActiveAdd class="bg-gray-200 md:mr-2" @click="store.showFilterModal = false">Cancel</ActiveAdd>
            <ActiveAdd class="bg-red-400 hover:bg-red-500 text-white" @click="addFilterItem">Add</ActiveAdd>
        </div>
    </div>
</template>