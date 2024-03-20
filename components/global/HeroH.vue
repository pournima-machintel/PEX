<template>
  <section>
    <div class="container mx-auto px-4">
      <div
        class="sm:px-6 lg:px-8 mx-auto py-16 px-8 border border-primary rounded-3xl"
      >
        <div class="max-w-6xl mx-auto">
          <div class="mx-auto text-center mb-8 lg:mb-16 px-4 sm:px-6 lg:px-8">
            <HeaderSection
              v-if="
                data &&
                data &&
                data.section_header &&
                data.section_header.linkedItems[0]
              "
              :data="data.section_header.linkedItems[0].elements"
            />
          </div>
          <div class="flex justify-between text-center md:flex-row flex-col">
            <div class="md:max-w-xs mx-auto p-4">
              <h2
                class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-primary font-black tracking-tight"
              >
                {{ data.first_number.value }}
              </h2>
              <h3 class="font-heading mb-3.5 text-xl text-primary font-bold">
                {{ data.first_number_text.value }}
              </h3>
            </div>
            <div class="md:max-w-xs mx-auto p-4">
              <h2
                class="font-heading mb-6 text-5xl md:text-6xl lg:text-7xl text-primary font-black tracking-tight"
              >
                {{ data.second_number.value }}
              </h2>
              <h3 class="font-heading mb-3.5 text-xl text-primary font-bold">
                {{ data.second_number_text.value }}
              </h3>
            </div>
          </div>
          <div class="grid md:grid-cols-3 grid-cols-2 gap-4 mt-10">
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Partner Locations
              </h3>
            </div>
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Business Contacts
              </h3>
            </div>
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Location Contact Mappings
              </h3>
            </div>
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Verified Emails
              </h3>
            </div>
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Verified Phone Numbers
              </h3>
            </div>
            <div class="text-center">
              <h3
                class="text-primary sm:text-base md:text-xl lg:text-2xl md:font-semibold"
              >
                Omnichannel Linkages
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HeroH",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
