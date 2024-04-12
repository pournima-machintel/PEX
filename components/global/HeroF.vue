<template>
    <!-- Hero -->
    <div class="backgroundGradient">
      <div class="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        <!-- Grid -->
        <div class="grid lg:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <component
              v-if="
                data &&
                data.heading__heading_text &&
                data.heading__heading_text.value &&
                data.heading__heading_text.value !== 'empty'
              "
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
            <p
              v-if="data && data.description && data.description.value"
              class="lg:text-xl text-normalfont-semibold text-gray-500 pre-line whitespace-pre-line mb-0 mt-0"
            >
              {{ data.description.value }}
            </p>
            <div
              v-if="
                data &&
                data.description_data &&
                data.description_data.value &&
                data.description_data.value !== '<p><br></p>'
              "
              class="lg:text-xl text-normalfont-semibold text-primary pre-line whitespace-pre-line mt-8 mb-0 hero-f-description-data"
              v-html="data.description_data.value"
            />
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
            <div
              v-if="
                data &&
                data.description_below_button &&
                data.description_below_button.value &&
                data.description_below_button.value !== '<p><br></p>'
              "
              class="lg:text-xl text-normalfont-semibold text-primary pre-line whitespace-pre-line mt-8 mb-0"
              v-html="data.description_below_button.value"
            />
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
    name: "HeroF",
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
  