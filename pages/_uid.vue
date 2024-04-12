<template>
  <div>
    <!-- Render components dynamically based on linkedItems -->
    <div v-for="item in linkedItems" :key="item.system.codename">
      <component
        :is="componentName(item)"
        :data="item"
        :nestedComponents="getNestedComponents(item)"
      />
    </div>
  </div>
</template>

<script>
import { DeliveryClient } from "@kentico/kontent-delivery";

export default {
  async asyncData({ route, params }) {
    const projectId = process.env.PROJECT_ID;
		const previewApiKey = process.env.PREVIEW_ID;

		const config = {
			projectId: projectId,
		};
		if (previewApiKey) {
			config.previewApiKey = previewApiKey;
			config.defaultQueryConfig = { usePreviewMode: true };
		}


		const deliveryClient = new DeliveryClient(config);

    try {
      const response = await deliveryClient
        .items() // Replace with your actual Kontent item codename
        .type("component_page")
        .equalsFilter("elements.slug", route.params.uid)
        .collection('partnerexplore')
        .toPromise();

      return { pageData: response.data.items[0] };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { pageData: {} };
    }
  },
  // Import and resolve components dynamically
  computed: {
    linkedItems() {
      return this.pageData.elements.components.linkedItems;
    },
  },
  methods: {
    // Get the component name based on the system.type
    componentName(item) {
      const type = item.system.type;
      const componentName = type
        .replace(/__/g, "-") // Replace '__' with '-'
        .split("-") // Split by '-'
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(""); // Join words without '-'

      return componentName;
    },

    // Get nested components for a given item
    getNestedComponents(item) {
      const richTextElement = item.elements.components;
      if (!richTextElement || !richTextElement.linkedItems) {
        return []; // Return an empty array if there are no nested components
      }

      const nestedComponents = richTextElement.linkedItems;
      return nestedComponents.map((component) => ({
        componentType: component.system.type,
        componentCodename: component.system.codename,
        data: component.elements,
      }));
    },
  },

  head() {
    return {
      title: this.pageData.elements.meta_title.value,
      meta: [
      {
           hid: 'description',
           name: 'description',
           content: this.pageData.elements.meta_description.value,
         },
        { name: "og:title", content: this.pageData.elements.meta_title.value },
        {
          name: "og:description",
          content: this.pageData.elements.meta_description.value,
        },
        {
          property: "og:image",
          content: 'https://machintel.com/images/mach-og.jpg',
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: this.pageData.elements.meta_title.value },
        {
          name: "twitter:description",
          content: this.pageData.elements.meta_description.value,
        },
        {
          name: "twitter:image",
          content: 'https://machintel.com/images/mach-og.jpg',
        },
        { name: "name", content: "@machintelInc" },
        { property: "og:sitename", content: "machintel" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://machintel.com" + this.$route.path,
        },
      ],
    };
  },

};
</script>
