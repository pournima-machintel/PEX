<template>
  <div>

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
      v-if="data && data.sub_heading && data.sub_heading.value"
      class="sm:text-xl"
      :class="data.heading__heading_color.value[0].codename == 'white' ? 'text-white' : 'text-gray-500'"
    >
      {{ data.sub_heading.value }}
    </p>
  </div>
</template>
<script>
import {
  getHeadingWeight,
  getHeadingColor,
  getHeadingSize,
  getHeadingType,
} from "/utils/dynamicOptions";
export default {
  name: "HeaderSection",
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
