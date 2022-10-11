<script setup lang="ts">
    import {ref} from 'vue'
    import {useStore} from "../../../store/index";
    const store = useStore();
    let labelSelect = ref<boolean>(false);
    let selectItem = ref<number>(0)
    function showItemIndex(index:number) {
        selectItem.value = index
        if(labelSelect){
            labelSelect.value = false
        }
    }
</script>

<template>
    <div class="bg-white md:pt-4 ">
        <div class=" md:pl-5 md:pr-5">
            <div class="md:w-full">
                <label class="text-sm font-bold" for="filter_name">Label name</label>
                <input type="text" id="filter_name" class="border md:mt-0.5 rounded outline-none w-full">
            </div>
            <div class="md:mt-2">
                <p class="text-sm font-bold">Label color</p>
                <div class="border md:h-[26px] md:mt-1 rounded cursor-pointer">
                    <div @click="labelSelect = !labelSelect" class="flex md:ml-2 md:pr-5 cursor-pointer items-center md:mt-0.5 w-full">
                        <div class="rounded-full w-3 h-3" :class="store.colors[selectItem].color"></div>
                        <p class="ml-2 text-sm">{{store.colors[selectItem].Name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="labelSelect"  class="overflow-y-scroll mt-1 h-56">
            <div v-for="(color, index) in store.colors" :key="index" @click="showItemIndex(index)" class="flex md:pl-5 md:pr-5 cursor-pointer items-center md:mt-1.5 hover:bg-gray-200 w-full">
                <div class="rounded-full w-3 h-3" :class="color.color">
                </div>
                <p class="ml-2 text-sm">{{color.Name}}</p>
            </div>
        </div>
    </div>
</template>