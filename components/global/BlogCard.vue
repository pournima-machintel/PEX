<template>
    <article
      class="bg-white rounded-lg border border-gray-200 shadow-md h-full lg:mt-0 mt-6"
    >
      <img
        :src="data.image.value[0].url"
        class="w-full object-cover"
        alt="office laptop working"
      />
  
      <div class="p-6">
        <span
          class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
          >{{ data.small_text.value }}</span
        >
        <h2 class="my-2 text-2xl font-bold tracking-tight text-gray-900">
          <a> {{ data.heading.value }}</a>
        </h2>
        <p class="mb-4 font-light text-gray-500">
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
        <!-- <div class="flex items-center space-x-4">
          <img
            class="w-10 h-10 rounded-full"
            :src="data.avatar.value[0].url"
            alt="Jese Leos avatar"
          />
          <div class="font-medium dark:text-white">
            <div>{{ data.name.value }}</div>
            <div class="text-sm font-normal text-gray-500 dark:text-gray-400">
              {{ data.date.value }}
            </div>
          </div>
        </div> -->
      </div>
    </article>
  </template>
  <script>
  import {
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
    getHeadingType,
  } from "/utils/dynamicOptions";
  export default {
    name: "BlogCard",
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
  