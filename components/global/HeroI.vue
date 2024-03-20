<template>
    <!-- Hero -->
  
    <div
      :style ="{backgroundImage: 'linear-gradient(rgba(24, 120, 142, 0.8), rgba(24, 120, 142, 0.8)), url(' + data.background_image.value[0].url + ')'}"
      class="relative overflow-hidden before:absolute before:bg-top bg-contain before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 pt-20"
    >
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div class="max-w-2xl text-center mx-auto">
          <component
            :is="dynamicHeadingTag"
            class="mb-4 tracking-tight leading-normal"
            :class="[
              getHeadingWeight(data.heading__heading_weight.value[0].codename),
              getHeadingSize(data.heading__heading_size.value[0].codename),
              getHeadingColor(data.heading__heading_color.value[0].codename),
            ]"
          >
            {{ data.heading__heading_text.value }}
          </component>
        </div>
        <!-- End Title -->
  
        <div class="mt-5 max-w-3xl text-center mx-auto">
          <p class="text-lg">
            {{ data.description.value }}
          </p>
        </div>
        <div
          v-if="
            data &&
            data.button_cta &&
            data.button_cta.linkedItems &&
            data.button_cta.linkedItems[0] &&
            data.button_cta.linkedItems[0].elements
          "
          class="flex justify-center items-center mt-8"
        >
          <NaCta :data="data.button_cta.linkedItems[0].elements" />
        </div>
      </div>
    </div>
    <!-- End Hero -->
  </template>
  
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "HeroB",
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
  