<template>
  <div class="w-full h-full flex py-10">
    <div class="max-w-[75rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div class="my-0 mx-auto">
        <div class="md:grid md:grid-cols-1 md:items-center md:gap-12 xl:gap-32">
          <div :class="getTextWidth(data.width.value[0].codename)">
            <div :class="getTextAlign(data.alignment.value[0].codename)">
              <div
                v-if="data && data.small_heading && data.small_heading.value"
                class="text-accent mb-2 font-extrabold text-xl tracking-widest leading-normal pre-line whitespace-pre-line"
                v-html="data.small_heading.value"
              />

              <component
                :is="dynamicHeadingTag"
                class="mb-4 tracking-tight leading-normal"
                :class="[
                  getHeadingWeight(
                    data.heading__heading_weight.value[0].codename
                  ),
                  getHeadingSize(data.heading__heading_size.value[0].codename),
                  getHeadingColor(
                    data.heading__heading_color.value[0].codename
                  ),
                ]"
              >
                {{ data.heading__heading_text.value }}
              </component>
              <div
                v-if="
                  data &&
                  data.content &&
                  data.content.value &&
                  data.content.value !== '<p><br></p>'
                "
                class="sm:text-xl text-gray-500"
                v-html="data.content.value"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getTextAlign,
  getTextWidth,
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";

export default {
  name: "JustText",
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
    getTextAlign,
    getTextWidth,
    getHeadingWeight,
    getHeadingColor,
    getHeadingSize,
  },
};
</script>
