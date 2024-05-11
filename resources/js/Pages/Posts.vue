<script setup>
import MainNavLayout from '@/Layouts/MainNavLayout.vue';
import { Head, usePage, Link } from '@inertiajs/vue3';

import Magnify from "vue-material-design-icons/Magnify.vue";
import TelevisionPlay from "vue-material-design-icons/TelevisionPlay.vue";
import StorefrontOutline from "vue-material-design-icons/StorefrontOutline.vue";
import AccountGroup from "vue-material-design-icons/AccountGroup.vue";
import AccountMultiple from 'vue-material-design-icons/AccountMultiple.vue'
import Flag from 'vue-material-design-icons/Flag.vue';
import ClockTimeTwoOutline from 'vue-material-design-icons/ClockTimeTwoOutline.vue'
import Restore from 'vue-material-design-icons/Resistor.vue';
import VideoImage from 'vue-material-design-icons/VideoImage.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue'

const user = usePage().props.auth.user;
</script>

<template>
<Head title="Poss" />

    <MainNavLayout>
        <div class="fixed w-full h-[100%] bg-[#F1F2F5]">
            <div class="grid grid-rows-3 grid-flow-col w-full max-w-[1600px] mt-[56px] h-[calc(100%-56px] mx-auto px-4">
                <div id="LeftSection" class="xl:w-[345px] lg:block hidden">
                    <div class="pt-4 max-w-[320px] pr-4">
                        <Link href="/" class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] p-2 rounded-md">
                            <img alt="" class="rounded-full ml-1 min-w-[38px] max-w-[38px]" src="https://picsum.photos/id/11/300/320" />
                            <div class="text-[15px] text-gray-800 font-extrabold pl-3"> Ayman Alhattami</div>
                        </Link>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <AccountMultiple :size="40" fill-color="#5BD7C6" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Friends</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <Flag :size="40" fill-color="#F2682C" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Pages</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <ClockTimeTwoOutline :size="40" fill-color="#21AAFA" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Most Recent</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <AccountGroup :size="40" fill-color="#20A9FD" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Groups</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <StorefrontOutline :size="40" fill-color="#48C0D8" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Marketplacce</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <TelevisionPlay :size="40" fill-color="#9739CF" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Watch</span>
                        </button>
                        <button class="flex items-center justify-start w-full cursor-pointer hover:bg-[#E5E6E9] px-2 py-1.5 rounded-md">
                            <Restore :size="40" fill-color="#32B4D0" />
                            <span class="text-[15px] text-gray-800 font-extrabold pl-3">Memories</span>
                        </button>
                    </div>
                </div>

                <div id="PostsSection" class="row-span-6 max-w-[600px] lg:mx-0 mx-auto overflow-auto">
                    PostsSection
                </div>

                <div id="RightSection" class="pl-4 md:block hidden">
                    <div class="max-w-[340px] min-w-[250px] mx-auto pt-4">
                        <div class="flex items-center justify-between border-b border-b-gray-300">
                            <div class="font-semibold">Contacts</div>
                            <div class="flex items-center">
                                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                                    <VideoImage :size="23" fill-color="#050505" />
                                </div>
                                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                                    <Magnify :size="23" fill-color="#050505" />
                                </div>
                                <div class="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
                                    <DotsHorizontal :size="23" fill-color="#050505" />
                                </div>
                            </div>
                        </div>

                        <div class="h-[calc(100vh-115px)] overflow-auto pt-2">
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/11/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Andrew Smith</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/12/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">John Wick Dev</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/13/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Evan You</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/14/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Adam Wathan</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/15/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Christoph Rumple</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/16/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Tailor Outwel</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/17/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Mohammed Saeed</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/18/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Dan Harren</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/11/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Andrew Smith</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/12/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">John Wick Dev</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/13/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Evan You</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/14/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Adam Wathan</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/15/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Christoph Rumple</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/16/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Tailor Outwel</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/17/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Mohammed Saeed</div>
                            </div>
                            <div class="flex items-center justify-start cursor-pointer hover:bg-[#E5E6E9] py-2 rounded-md">
                                <img class="rounded-full ml-1 min-w-[38px] max-h-[38px]" src="https://picsum.photos/id/18/300/320" alt="">
                                <div class="text-[15px] text-gray-800 font-extrabold pl-3">Dan Harren</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainNavLayout>
</template>

<style scoped>

</style>
