<template>
  <section>
    <div class="py-8 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div
        class="mx-auto max-w-screen-lg text-center mb-8 pre-line whitespace-pre-line"
      >
        <HeaderSection :data="data.section_heading.linkedItems[0].elements" />
      </div>
      <img
        v-if="
          data && data.image && data.image.value && data.image.value.length <= 1
        "
        class="w-full h-full"
        :src="data.image.value[0].url"
        :alt="data.image.value[0].description"
      />
      <div v-else class="grid md:grid-cols-4 grid-cols-2 items-center gap-2 gap-y-4">
        <div v-for="codename in data.image.value" :key="codename" class="flex justify-center p-4">
            <img
              class="w-28 h-full"
              :src="codename.url"
              :alt="codename.description"
            />
        </div>
      </div>
      <div class="mt-4 text-gray-600 text-center text-3xl">
        {{ data.description.value }}
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeatureG",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
