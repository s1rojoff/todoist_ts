<script setup lang="ts">
import menuSvg from "./Svg/menuSvg.vue";
import homeSvg from "./Svg/homeSvg.vue";
import plusSvg from "./Svg/plusSvg.vue";
import notifSvg from "./Svg/notifSvg.vue";
import infoSvg from "./Svg/infoSvg.vue";
import productivySvg from "./Svg/productivySvg.vue";
import SvgBtn from "../../MainComponents/SvgBtn.vue";
import letterHelper from "../../MainComponents/letterHelper.vue";
import HomePage from "../../../views/HomePage.vue";
import PlusSvg from "./Svg/plusSvg.vue";
import NavInput from "./navInput.vue";
import { useStore } from "../../../store";
import { ref } from "@vue/reactivity";
import InboxTaskBoard from "../../InboxPage/InboxTaskBoard.vue";
const store = useStore()
const showAddTask  = ref<boolean>(false)  
function Toggle(){
  showAddTask.value = !showAddTask.value
}
</script>
<template>
  <nav>
    <div class="w-full px-14 py-2 bg-red-600 flex justify-between relative">
      <div class="flex">
        <div  class="mr-2 ">
          <svg-btn width="w-[100px]">
            <template #svg>
              <menu-svg />
            </template>
            <template #title>
              Close menu <letter-helper>m</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-3">
          <svg-btn width="w-[150px]">
            <template #svg>
              <home-svg></home-svg>
            </template>
            <template #title>
              Go to home <letter-helper>G</letter-helper> then
              <letter-helper>H</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div>
          <NavInput/>
        </div>
        <div v-show ="showAddTask" class="absolute z-30 shadow-2xl left-[40%] top-28 w-[500px]
        ">
            <InboxTaskBoard></InboxTaskBoard>
        </div>
      </div>
      <div class="flex">
        <div class="mr-2" @click="Toggle" >
          <svg-btn width="w-[95px]">
            <template #svg>
              <PlusSvg />
            </template>
            <template #title>
              Add task <letter-helper>Q</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-2">
          <svg-btn width="w-[170px]">
            <template #svg> <productivy-svg></productivy-svg>0/5 </template>
            <template #title>
              Open Productivy <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="mr-2">
          <svg-btn width="w-[220px] translate-x-[-180px]">
            <template #svg>
              <info-svg />
            </template>
            <template #title>
              Open Help & Information <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div>
          <svg-btn width="w-[200px] translate-x-[-170px]">
            <template #svg>
              <notif-svg />
            </template>
            <template #title>
              Open notifications <letter-helper>O</letter-helper> then
              <letter-helper>P</letter-helper>
            </template>
          </svg-btn>
        </div>
        <div class="ml-2">
          <div>
            <svg-btn width="w-[220px] translate-x-[-170px]">
              <template #svg>
                <img
                  src="../../../../public/img/apps-illustrations.webp"
                  alt=""
                  class="w-9 scale-120 rounded-full"
                />
              </template>
              <template #title>
                Open profile photo menu <letter-helper>O</letter-helper> then
                <letter-helper>U</letter-helper>
              </template>
            </svg-btn>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>