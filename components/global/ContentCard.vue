<template>
    <!-- Features -->
    <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
      <div v-if="data.alignment.value[0].codename === 'image_left'">
        <div
          class="flex lg:flex-row lg:w-10/12 bg-white rounded-lg md:flex-row flex-col"
        >
          <div class="w-full">
            <img
              class="h-full w-full object-cover lg:rounded-none rounded-lg"
              :src="data.image.value[0].url"
              :alt="data.image.value[0].description"
            />
          </div>
  
          <div class="mt-5 lg:mt-9 p-7">
            <div
              :class="[
                getHeadingWeight(data.heading__heading_weight.value[0].codename),
                getHeadingSize(data.heading__heading_size.value[0].codename),
                getHeadingColor(data.heading__heading_color.value[0].codename),
              ]"
            >
              {{ data.heading__heading_text.value }}
            </div>
            <div
              v-if="data && data.sub_heading && data.sub_heading.value"
              class="font-extrabold text-md mb-0 pt-[3px]"
              :class="[
                getHeadingColor(
                  data.heading_color__heading_color.value[0].codename
                ),
              ]"
            >
              {{ data.sub_heading.value }}
            </div>
            <div class="text-md text-gray-500">{{ data.content.value }}</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div
          class="block lg:flex md:flex lg:flex-row md:flex-row flex-col-reverse text-left lg:w-10/12 bg-white rounded-lg ml-auto lg:text-right md:text-left"
        >
          <!-- End Col -->
          <div class="w-full lg:hidden block">
            <img
              class="h-full w-full object-cover rounded-lg"
              :src="data.image.value[0].url"
              :alt="data.image.value[0].description"
            />
          </div>
          <div class="mt-5 sm:mt-9 p-7">
            <div
              :class="[
                getHeadingWeight(data.heading__heading_weight.value[0].codename),
                getHeadingSize(data.heading__heading_size.value[0].codename),
                getHeadingColor(data.heading__heading_color.value[0].codename),
              ]"
            >
              {{ data.heading__heading_text.value }}
            </div>
            <div
              v-if="data && data.sub_heading && data.sub_heading.value"
              class="font-extrabold text-md mb-0 pt-[3px]"
              :class="[
                getHeadingColor(
                  data.heading_color__heading_color.value[0].codename
                ),
              ]"
            >
              {{ data.sub_heading.value }}
            </div>
            <div class="text-md text-gray-500">{{ data.content.value }}</div>
          </div>
          <div class="w-full lg:block hidden">
            <img
              class="h-full w-full object-cover"
              :src="data.image.value[0].url"
              :alt="data.image.value[0].description"
            />
          </div>
          <!-- End Col -->
        </div>
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Features -->
  </template>
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "ContentCard",
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
    computed: {
      dynamicHeadingTag() {
        const headingTypeCode = this.data.heading__heading_type.value[0].codename;
        return getHeadingType(headingTypeCode);
      },
    },
    methods: {
      getHeadingWeight,
      getHeadingColor,
      getHeadingSize,
    },
  };
  </script>
  