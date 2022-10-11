<script setup lang="ts">
    import {useStore} from "../../store"
    const store = useStore()

</script>
<template>
    <div 
    @click="store.$state.checked = !store.$state.checked"
    class="w-9 transition-all duration-200 h-[20px] rounded-xl  items-center border-2 p-[2px]" :class="store.$state.checked ? 'bg-green-800' : 'bg-gray-500 flex'">
        <div class="w-3 h-3 rounded-full bg-white" :class="store.$state.checked ? 'translate-x-4' : ''"></div>
    </div>
</template>