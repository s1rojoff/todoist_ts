<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from '../../store'
import calendarSvgVue from '../../components/features/components/sixSection/Svg/calendarSvg.vue';
import CloseSvg from './Svg/closeSvg.vue';
import InboxSvg from './Svg/inboxSvg.vue';
import CommentItem from './commentItem.vue';
import BaseInput from '../../components/MainComponents/BaseInput.vue';
import SvgBtn from '../../components/MainComponents/SvgBtn.vue';
import ScripkaSvg from './Svg/scripkaSvg.vue';
import RecordSvg from './Svg/RecordSvg.vue';
import CommentSvg from './Svg/CommentSvg.vue';
import BaseBtn from '../../components/MainComponents/BaseBtn.vue';
import InputFile from '../../components/MainComponents/inputFile.vue';
import DeleteSvg from './Svg/deleteSvg.vue';
const store = useStore()
let Activity = ref<boolean>(false)
let comments = ref<boolean>(true)
let file = ref<string>('')
let commentValue = ref<string>("")
let updatedComment = ref<string>("")
function replaceValue(val: boolean, val2: boolean) {
    Activity.value = val
    comments.value = val2
}
function addComment() {
    store.commentItems.push({
        img: 'public/img/apps-illustrations.webp',
        email: 'jorayevAzik@gmail.com',
        date: new Date().toLocaleString(),
        file: file.value,
        comment: commentValue.value
    })
    commentValue.value = ""
    file.value = ""
}

function DeleteId(id: number) {
    store.$state.commentItems.splice(id, 1)
}
function EditComment(id: number) {
    store.editId = id
}

</script>
<template>
    <div class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center ">
        <div class="w-[650px] p-[20px] bg-white rounded-xl">
            <div class="w-full">
                <div class="flex w-full justify-between">
                    <div class="flex">
                        <InboxSvg></InboxSvg>
                        <p class="ml-3">Inbox</p>
                    </div>
                    <div class="hover:bg-gray-200">
                        <CloseSvg></CloseSvg>
                    </div>
                </div>
                <div class="flex w-[175px] bg-gray-200 rounded-full p-1">
                    <div @click="replaceValue(false,true)"
                        class="rounded-full  px-2 py-1 mr-1 text-gray-400 transition-all"
                        :class=" comments ? 'bg-white ' : 'font-bold'">
                        <p>Comments</p>
                    </div>
                    <div @click="replaceValue(true,false)" class="rounded-full  px-2 py-1 text-gray-400 transition-all"
                        :class="Activity ? 'bg-white text-black' : 'font-bold'">
                        <p>Activity</p>
                    </div>
                </div>
                <div v-show='comments'>
                    <div class="h-[350px] my-3 overflow-y-scroll">
                        <div v-for="(com,i) in store.$state.commentItems" :key="i" class=" w-full">
                            <CommentItem @edit-comment="EditComment(i)" @DeleteIds="DeleteId(i)" :date="com.date"
                                :email="com.email" :comment-value="com.comment" :file="com.file">
                            </CommentItem>
                        </div>
                    </div>
                    <div class="w-full border-2 border-gray-200 rounded-md p-[10px]">
                        <BaseInput v-model="commentValue" class="outline-none border-none" placeholder="Comment">
                        </BaseInput>
                        <div v-show="file" class="bg-gray-300 text-sm flex p-2 rounded-md">
                            <div @click=" file= ''" class="hover:text-red-500 mr-3">
                                <DeleteSvg></DeleteSvg>
                            </div>
                            <div>
                                {{file}}
                            </div>
                        </div>
                        <div class="flex justify-between w-full mt-7">
                            <div class=" flex">
                                <div class=" rounded-md hover:bg-gray-300">
                                    <InputFile v-model="file">
                                        <SvgBtn width="w-[90px]">
                                            <template #svg>
                                                <ScripkaSvg></ScripkaSvg>
                                            </template>
                                            <template #title>Attach file</template>
                                        </SvgBtn>
                                    </InputFile>
                                </div>
                                <div class=" rounded-md hover:bg-gray-300">
                                    <SvgBtn width="w-[90px]">
                                        <template #svg>
                                            <RecordSvg></RecordSvg>
                                        </template>
                                        <template #title>Record Audio</template>
                                    </SvgBtn>
                                </div>
                                <div class=" rounded-md hover:bg-gray-300">
                                    <SvgBtn width="w-[70px]">
                                        <template #svg>
                                            <CommentSvg></CommentSvg>
                                        </template>
                                        <template #title>Attach file</template>
                                    </SvgBtn>
                                </div>
                            </div>
                            <div>
                                <BaseBtn @click="addComment">Comment</BaseBtn>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="Activity" class="h-[460px] my-3 flex justify-center items-center bg-gray-200">
                        This is Activity Section 
                </div>
            </div>
        </div>
    </div>
</template>