<script setup lang="ts">
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue'
import {useStore} from '../../store'
import SvgBtn from '../../components/MainComponents/SvgBtn.vue';
import EditSvg from './Svg/EditSvg.vue';
import CopySvg from './Svg/copySvg.vue';
import DeleteSvg from './Svg/deleteSvg.vue';
import FileSvg from './Svg/fileSvg.vue';
import BaseInput from '../../components/MainComponents/BaseInput.vue';
import BaseBtn from '../../components/MainComponents/BaseBtn.vue';
const store = useStore()
let showBlock = ref<boolean>(false)
let showMenu = ref<boolean>(false)
let showSvg = ref<boolean>(false)
let showUpdate = ref<boolean>(false)
let isUpdated = ref<boolean>(false)
let showComment = ref<boolean>(true)
let updatedComment = ref<string>('')
const emit = defineEmits(['DeleteIds', 'EditComment'])
function closeItem() {
    showBlock.value = false
    showMenu.value = false
}
function DeleteId() {
    emit('DeleteIds')
}
function Edit() {
    showComment.value=false
    showUpdate.value= true
    emit('EditComment')
}
function Update(val: boolean) {
    isUpdated.value = val
    if (isUpdated.value) {
        store.commentItems[store.editId].comment = updatedComment.value
        
        showUpdate.value = false
        showComment.value = true
    }
    else {
        showUpdate.value = false
        showComment.value = true
    }

}
const props = defineProps({
    img: {
        type: String,
    },
    email: {
        type: String
    },
    date: {
        type: String
    },
    file: {
        type: String
    },
    commentValue: {
        type: String
    }

})
if (props.file) {
    showSvg.value = true
}
</script>
<template>
    <div >
        <div v-show="showComment" class="flex justify-between w-full mt-5" @mouseenter="showBlock = true" @mouseleave="closeItem">
            <div>
                <div class="flex">
                    <div class="w-[50px] h-[50px]">
                        <img src="../../../public/img/apps-illustrations.webp" alt=""
                            class="rounded-full border-2 border-gray-300">
                    </div>
                    <div>
                        <div class="flex">
                            <h1 class="font-bold ml-2">{{email}}</h1>
                            <p class="text-sm mt-1 text-gray-400">{{date}}</p>
                        </div>
                        <p>{{commentValue}}</p>
                    </div>
                </div>
                <div>
                    <div v-show="showSvg" class="flex p-2 border-2 border-gray-200 rounded-sm">
                        <div>
                            <FileSvg></FileSvg>
                        </div>
                        <p class="font-bold text-gray-400"> {{file}}</p>
                    </div>
                </div>
            </div>
            <div class=" relative">
                <div v-show="showBlock" class="hover:bg-gray-200" @click="showMenu = !showMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <g fill="none" stroke="currentColor" stroke-linecap="round" transform="translate(3 10)">
                            <circle cx="2" cy="2" r="2"></circle>
                            <circle cx="9" cy="2" r="2"></circle>
                            <circle cx="16" cy="2" r="2"></circle>
                        </g>
                    </svg>
                </div>
                <div v-show="showMenu"
                    class="absolute -left-[160px] shadow-xl text-sm rounded-lg bg-white z-30 w-[200px]">
                    <div @click="Edit" class="flex p-2 hover:bg-gray-200">
                        <div class="mr-3">
                            <EditSvg></EditSvg>
                        </div>
                        <div>
                            Edit comment
                        </div>
                    </div>
                    <div class="flex p-2 hover:bg-gray-200">
                        <div class="mr-3">
                            <CopySvg></CopySvg>
                        </div>
                        <div>
                            Copy text
                        </div>
                    </div>
                    <div class="flex p-2 hover:bg-gray-200" @click="DeleteId">
                        <div class="mr-3">
                            <DeleteSvg></DeleteSvg>
                        </div>
                        <div>
                            Delete comment
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="showUpdate">
            <div class="my-5">
                <img src="../../../public/img/apps-illustrations.webp" alt=""
                    class="w-[60px] h-[60px] rounded-full border-2 border-red-500">
            </div>
            <div class="ml-10">
                <BaseInput v-model="updatedComment" class="border-none outline-none" placeholder="Comment"></BaseInput>
            </div>
            <div class="flex my-5 float-right mr-5">
                <BaseBtn @click="Update(false)" class="bg-gray-200 hover:bg-gray-300 mr-3 text-black">Cancel</BaseBtn>
                <BaseBtn @click="Update(true)">Update</BaseBtn>
            </div>
        </div>
    </div>
</template>