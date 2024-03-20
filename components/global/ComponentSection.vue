<template>
  <div
    :class="[
      getStatusColor(data.elements.background_color.value[0].codename),
      getSectionPadding(data.elements.padding.value[0].codename),
    ]"
  >
    <div
      v-for="nestedComponent in nestedComponents"
      :key="nestedComponent.componentCodename"
    >
      <component
        :is="componentName(nestedComponent)"
        :data="nestedComponent.data"
        :nestedComponents="getNestedComponents(nestedComponent)"
      />
    </div>
  </div>
</template>
<script>
// Import padding, margin and color for TW
import { getStatusColor, getSectionPadding } from "~/utils/dynamicOptions";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    nestedComponents: {
      type: [Array, Object],
      default: () => "",
    },
  },
  data() {
    return {
      // any state variables
    };
  },
  methods: {
    getStatusColor,
    getSectionPadding,

    // Change component names to match files
    componentName(item) {
      const type = item.componentType;
      const componentName = type
        .replace(/__/g, "-")
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
      return componentName;
    },
    // End of component names

    // Cycle through nested components
    getNestedComponents(item) {
      if (!item.data || !item.data.elements || !item.data.elements.components) {
        return [];
      }
      const nestedComponents = item.data.elements.components.linkedItems;
      return nestedComponents.map((component) => ({
        componentType: component.system.type,
        componentCodename: component.system.codename,
        data: component.elements,
      }));
    },
  },
  computed: {
    // Deal with Dynamic class for TW
    dynamicClasses() {
      return [
        getStatusColor(this.data.elements.background_color.value[0].codename),
        getSectionPadding(this.data.elements.padding.value[0].codename),
        getSectionMargin(this.data.elements.margin.value[0].codename),
      ];
    },
  },
};
</script>
