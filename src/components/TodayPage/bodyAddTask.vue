<script setup lang="ts">
  import {useStore} from '../../store'
  import {useAttrs} from 'vue'
  const store = useStore()
  const  attrs = useAttrs()
function taskBoard(){
  store.taskSection = !store.taskSection
}
</script>
<template>
  <div v-bind="attrs" @click="taskBoard"  class="hover:text-red-600 add-task text-sm cursor-pointer">
    <div class="flex">
      <span
        class="plus text-lg rounded-full flex items-center justify-center mr-2"
        >+</span
      >
      <span class="add">Add Task</span>
    </div>
  </div>
</template>
<style scoped>
.add-task:hover .plus {
  color: white;
  background: rgb(197, 9, 9);
}
.add-task:hover .add {
  color: rgb(197, 9, 9);
}
.plus {
  color: rgb(197, 9, 9);
  background: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.add {
  color: gray;
}
</style>