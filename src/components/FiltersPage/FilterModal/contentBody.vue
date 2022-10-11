<script setup lang="ts">
    import {ref} from 'vue'
    import {useStore} from "../../../store/index";
    const store = useStore();
    let showSelect = ref<boolean>(false);
    let selectIndex = ref<number>(0);

    function showItemIndex(index:number) {
        selectIndex.value = index;
        showSelect.value = false
    }
</script>

<template>
    <div class="bg-white md:pt-4 ">
        <div class=" md:pl-5 md:pr-5">
            <div class="md:w-full">
                <label class="text-sm font-bold" for="filter_name">Filter name</label>
                <input type="text" id="filter_name" class="border md:mt-0.5 rounded outline-none w-full">
            </div>
            <div class="md:mt-3">
                <label class="text-sm font-bold" for="filter_query">Filter query</label>
                <textarea class="border md:mt-0.5 w-full rounded" id="filter_query"></textarea>
            </div>
            <div class="md:mt-2">
                <p class="text-sm font-bold">Filter color</p>
                <div @click="showSelect = !showSelect" class="border md:h-[26px] md:mt-1 rounded cursor-pointer">
                    <div class="flex md:ml-2 md:pr-5 cursor-pointer items-center md:mt-0.5 w-full">
                        <div class="rounded-full w-3 h-3" :class="store.$state.colors[selectIndex].color">
                        </div>
                        <p class="ml-2 text-sm">{{store.$state.colors[selectIndex].Name}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showSelect" class="overflow-y-scroll mt-1 h-56">
            <div v-for="(color, index) in store.colors" :key="index" @click="showItemIndex(index)" class="flex md:pl-5 md:pr-5 cursor-pointer items-center md:mt-1.5 hover:bg-gray-200 w-full">
                <div class="rounded-full w-3 h-3" :class="color.color">
                 </div>
                <p class="ml-2 text-sm">{{color.Name}}</p>
            </div>
        </div>
    </div>
</template>