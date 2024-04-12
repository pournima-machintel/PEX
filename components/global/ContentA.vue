<template>
    <section class="bg-white">
      <div
        class="gap-16 items-center lg:grid lg:grid-cols-2 lg:py-16 py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl"
      >
        <div class="grid grid-cols-2 gap-4 mb-8">
          <img
            class="w-full rounded-lg"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
          <img
            class="mt-4 w-full lg:mt-10 rounded-lg"
            :src="data.image.value[1].url"
            :alt="data.image.value[1].description"
          />
        </div>
        <div class="font-light sm:text-lg">
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
          <p
            class="mb-4 pre-line whitespace-pre-line text-primary text-base lg:text-xl"
          >
            {{ data.description.value }}
          </p>
          <div
            v-if="
              data &&
              data.button_cta &&
              data.button_cta.linkedItems &&
              data.button_cta.linkedItems[0] &&
              data.button_cta.linkedItems[0].elements
            "
            class="inline-flex items-center"
          >
            <NaCta :data="data.button_cta.linkedItems[0].elements" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "ContentA",
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
  