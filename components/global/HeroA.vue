<template>
    <!-- Hero -->
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid -->
      <div class="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <div
            v-if="
              data &&
              data.hero_header &&
              data.hero_header.value &&
              data.hero_header.value !== '<p><br></p>'
            "
            class="mb-3 text-accent text-xl font-medium tracking-widest leading-normal pre-line whitespace-pre-line"
            v-html="data.hero_header.value"
          />
          <component
            :is="dynamicHeadingTag"
            class="mb-4 tracking-tight leading-normal hero-line-height"
            :class="[
              getHeadingWeight(data.heading__heading_weight.value[0].codename),
              getHeadingSize(data.heading__heading_size.value[0].codename),
              getHeadingColor(data.heading__heading_color.value[0].codename),
            ]"
          >
            {{ data.heading__heading_text.value }}
          </component>
          <p class="mt-3 lg:text-xl text-normalfont-semibold text-primary">
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
            class="inline-flex items-center mt-5"
          >
            <NaCta :data="data.button_cta.linkedItems[0].elements" />
          </div>
        </div>
        <!-- End Col -->
  
        <div class="relative lg:ml-4">
          <img
            class="rounded-md max-h-96 mx-auto w-auto"
            :src="data.image.value[0].url"
            :alt="data.image.value[0].description"
          />
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
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
    name: "HeroA",
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
  