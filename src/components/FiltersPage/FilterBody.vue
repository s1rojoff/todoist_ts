<script setup lang="ts">
    import {useStore} from "../../store";
    import {defineEmits,ref} from 'vue'
    import FilterItem from './FilterItem.vue';
    import LabelItem from './LabelItem.vue';
    import BodyTitle from './BodyTitle.vue'
    import modalMain from './FilterModal/modalMain.vue'
    import LabelModalMain from '../FiltersPage/LabelModal/LabelModalMain.vue'
    const store = useStore();
    let rotateFilter = ref(true);
    let rotateLabel = ref(true);
    function toggleVar() {
        rotateFilter.value = !rotateFilter.value;
        console.log(rotateFilter)
    }
    function replaceBg(color:string) {
        color= color.substring(2);
        return 'text' + color;
    }
</script>

<template>
    <div class="md:pl-32 md:pr-36 md:mt-7">
        <BodyTitle :rotateClass="[rotateFilter ? 'rotate-0' : '-rotate-90']" @clickPlus="store.showFilterModal = true"  @clickDown="rotateFilter = !rotateFilter">Filters</BodyTitle>
        <div class="md:pl-5"><hr></div>
        <div v-if="rotateFilter">
            <FilterItem v-for="(item, index) in store.filterItems" :color="replaceBg(store.colors[item.index].color)" :key="index">{{item.name}}</FilterItem>
        </div>
        <BodyTitle :rotateClass="[rotateLabel ? 'rotate-0' : '-rotate-90']" @clickPlus="store.showLabelModal = true"  @clickDown="rotateLabel = !rotateLabel" class="md:mt-10">Labels</BodyTitle>
        <div v-if="rotateLabel">
            <LabelItem v-for="item in store.labelItems" :key="item">{{item}}</LabelItem>
        </div>
    </div>
    <modalMain v-if="store.showFilterModal"/>
    <LabelModalMain v-if="store.showLabelModal"/>
</template>