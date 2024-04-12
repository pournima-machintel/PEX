<template>
    <section>
      <div
        :class="
          data && data.description_right && data.description_right.value
            ? 'gap-16 items-center py-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-9 px-4 sm:px-6 lg:px-8'
            : 'items-center py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl'
        "
      >
        <div class="sm:text-lg">
          <div
            v-if="data && data.description_left && data.description_left.value"
            class="mb-4 text-primary-3 tracking-widest leading-normal pre-line whitespace-pre-line"
          >
            {{ data.description_left.value }}
          </div>
          <component
            :is="dynamicHeadingTag"
            class="tracking-tight leading-normal"
            :class="[
              getHeadingWeight(data.heading__heading_weight.value[0].codename),
              getHeadingSize(data.heading__heading_size.value[0].codename),
              getHeadingColor(data.heading__heading_color.value[0].codename),
            ]"
          >
            {{ data.heading__heading_text.value }}
          </component>
        </div>
        <div
          v-if="data && data.description_right && data.description_right.value"
          class="font-light text-white sm:text-lg lg:mt-0"
        >
          <p class="pre-line whitespace-pre-line">
            {{ data.description_right.value }}
          </p>
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
    name: "ContentB",
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
  