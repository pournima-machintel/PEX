<template>
    <div class="resource">
      <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        <div>
          <img
            :src="pageData.elements.image.value[0].url"
            :alt="pageData.elements.image.value[0].description"
          />
        </div>
        <div class="text-font font-medium antialiased">
          <span class="text-base">{{
            pageData.elements.type.value[0].name
          }}</span>
          <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">
            {{ pageData.elements.post_title.value }}
          </h1>
          <div
            class="font-medium antialiased text-lg"
            v-html="pageData.elements.intro.value"
          ></div>
        </div>
      </div>
        <section
        class="bg-gray-200"
        v-if="pageData.elements.gated_option.value[0].codename === 'gated'"
      >
        <div
          class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
        >
          <div class="">
            <div
              v-html="pageData.elements.description.value"
              class="text-gray-900 font-medium text-lg antialiased"
            ></div>
          </div>
          <div class="p-10 bg-white">
            <p class="font-bold text-lg text-center">
              {{ pageData.elements.form_heading.value }}
            </p>
            <form
              id="webform"
              @submit.prevent="handleSubmit"
              :action="formData.form_submit_url.value"
              name="WebToLeads440392000010730026"
              method="POST"
              accept-charset="UTF-8"
              ref="webform"
              class="text-black"
            >
              <input
                type="text"
                style="display: none"
                name="xnQsjsdp"
                value="fca34dfa7bc909e0f4b0544affa4c3c4fb36a1338d847352a07ef552c3be0ee8"
              />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input
                type="text"
                style="display: none"
                name="xmIwtLD"
                value="f73e0aef610e783c9b87f39c6dcb5f2f17ddb722c8c48dc72f41fc152a49b53340ce3b0c9d0e16b44292fec26ede0774"
              />
              <input
                type="text"
                style="display: none"
                name="actionType"
                value="TGVhZHM="
              />
              <input
                type="text"
                style="display: none"
                name="returnURL"
                :value="thankYouUrl"
              />
              <!-- Do not remove this code. -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <!-- Grid -->
                <div>
                  <input
                    type="text"
                    required
                    id="First_Name"
                    v-model="First_Name"
                    placeholder="First Name"
                    name="First Name"
                    maxlength="40"
                    class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    id="Last_Name"
                    v-model="Last_Name"
                    name="Last Name"
                    placeholder="Last Name"
                    maxlength="80"
                    class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
              </div>
              <!-- End Grid -->
              <input
                type="text"
                ftype="email"
                required
                id="Email"
                placeholder="Email"
                v-model="Email"
                name="Email"
                maxlength="100"
                class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
              />
              <!-- Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <!-- Company Name -->
                  <input
                    type="text"
                    id="LEADCF24"
                    v-model="LEADCF24"
                    placeholder="Company"
                    name="LEADCF24"
                    maxlength="255"
                    class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone"
                    required
                    id="Phone"
                    v-model="Phone"
                    name="Phone"
                    maxlength="30"
                    class="py-3 px-4 mb-5 block w-full border border-colors-primary-900 rounded-md text-sm text-colors-font"
                  />
                </div>
              </div>
              <!-- End Grid -->
  
              <!-- Message -->
              <input
                type="text"
                name="fullName"
                id="fullname"
                v-model="fullName"
              />
              <input
                type="hidden"
                id="Lead_Status"
                v-model="leadStatus"
                name="Lead Status"
              />
              <input
                type="hidden"
                id="Lead_Source"
                v-model="leadSource"
                name="Lead Source"
              />
              <!-- UTM Medium --><input
                type="hidden"
                id="LEADCF21"
                name="LEADCF21"
                maxlength="255"
                v-model="LEADCF21"
              />
              <!-- UTM Campaign --><input
                type="hidden"
                id="LEADCF22"
                name="LEADCF22"
                maxlength="255"
                v-model="LEADCF22"
              />
              <!-- UTM Source --><input
                type="hidden"
                id="LEADCF19"
                name="LEADCF19"
                maxlength="255"
                v-model="LEADCF19"
              />
              <!-- UTM Medium --><input
                type="hidden"
                id="LEADCF20"
                name="LEADCF20"
                maxlength="255"
                v-model="LEADCF20"
              />
  
              <div class="mt-3 flex">
                <div>
                  <label for="remember-me" class="text-xs text-black"
                    >By submitting this form I have read and acknowledged the
                    <a
                      class="text-blue-600 underline font-medium"
                      href="https://machintel.com/privacy-policy"
                      target="_blank"
                      >Privacy policy</a
                    ></label
                  >
                </div>
              </div>
              <div class="mt-6 grid">
                <button type="submit" class="btn bg-accent-2 text-white">
                  Submit
                </button>
              </div>
  
              <!-- Do not remove this Analytics Tracking code starts -->
              <script
                id="wf_anal"
                src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=3cfee387668f884d504642f8fb6dd1400f6bb83cbd01ea0b70e2edc583f31c31da23f802796678f8725589176e54824fgid7cef5a6fece3ac184a32e9b4efe8a7a3401f5fec83004acdbdd6bc2b7dfc84f3gid9191dae8b35c299a833cefdae14de02bcbf1e274248110fad84f7a10b7d0d57bgidc9e90c9f48f9f58f00180630b19ac9477d08ce52b36dae7ed439dc02ea19afe0&tw=3589a4203232fa268ab05fc8a31e37c28dae22a79133802ba130ef8cd5b07bd8"
              ></script>
              <!-- Do not remove this Analytics Tracking code ends. -->
            </form>
          </div>
        </div>
      </section>
      <section class="bg-gray-200" v-else>
        <div
          class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
        >
          <div class="">
            <div
              v-html="pageData.elements.description.value"
              class="text-gray-900 font-medium text-lg antialiased"
            ></div>
          </div>
  
          <a
            class="btn-color text-center inline-flex items-center btn-blue text-white text-sm font-bold border-0 btn-accent-2 shadow-md bg-accent-2 px-6 py-3"
            :href="pageData.elements.pdf_asset.value[0].url"
            >Download Now
            <svg
              class="ml-2 w-5 h-5 mt-[2px]"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4481 9.20802L15.4476 9.20913C15.4138 9.29532 15.3646 9.37225 15.3041 9.4361C15.3039 9.43623 15.3038 9.43636 15.3037 9.4365L10.7328 14.2234L10.7327 14.2233L10.7269 14.2297C10.6663 14.2953 10.5952 14.3463 10.5183 14.3809L10.7234 14.8369L10.5183 14.3809C10.4415 14.4155 10.3597 14.4333 10.2777 14.4341C10.1957 14.4348 10.1137 14.4185 10.0365 14.3854L9.83953 14.845L10.0364 14.3854C9.95911 14.3522 9.88727 14.3026 9.82576 14.2382C9.76422 14.1738 9.71437 14.0958 9.68022 14.0084C9.64607 13.921 9.62862 13.8266 9.62942 13.7309C9.63021 13.6352 9.64922 13.5412 9.68478 13.4545L9.22218 13.2647L9.68478 13.4545C9.72032 13.3678 9.77139 13.2909 9.83388 13.2277L9.83393 13.2278L9.83993 13.2215L12.4607 10.4769L13.2678 9.63162H12.0991H1.14293C0.980059 9.63162 0.818916 9.56408 0.696374 9.43574C0.573083 9.30663 0.5 9.12678 0.5 8.93468C0.5 8.74258 0.573083 8.56274 0.696374 8.43362C0.818916 8.30528 0.980059 8.23774 1.14293 8.23774H12.0991H13.2678L12.4607 7.39244L9.83879 4.64666L9.83884 4.64661L9.83274 4.64043C9.77024 4.57723 9.71918 4.50035 9.68364 4.4137C9.64808 4.327 9.62907 4.23297 9.62827 4.13727C9.62748 4.04157 9.64492 3.94715 9.67908 3.85972C9.71322 3.77233 9.76307 3.69441 9.82462 3.62996C9.88612 3.56555 9.95796 3.51594 10.0353 3.4828C10.1126 3.44969 10.1945 3.43336 10.2766 3.43411C10.3586 3.43485 10.4403 3.45268 10.5172 3.48724C10.5941 3.52184 10.6652 3.57283 10.7257 3.63847L10.7257 3.63852L10.7317 3.64479L15.3034 8.43255L15.3035 8.43266C15.3953 8.52876 15.4603 8.65396 15.4868 8.79355C15.5134 8.93322 15.4996 9.07777 15.4481 9.20802Z"
                fill="white"
                stroke="white"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  
    <!-- Render components dynamically based on linkedItems -->
  </template>
  
  <script>
  import { DeliveryClient } from "@kentico/kontent-delivery";
  
  export default {
    data() {
              return {
              First_Name:'',
              Last_Name:'',
              Email: "",
              LEADCF24: '',
              Phone:'',
              LEADCF21:'',
              LEADCF22:'',
              LEADCF19:'',
              LEADCF20:'',
              leadStatus: 'New - Not Contacted',
              leadSource: 'Website - Download',
              fullName: "",
              formData: {
                  form_submit_url: {
                  value: 'https://crm.zoho.in/crm/WebToLeadForm', // Default or fetched URL
                  },
              },
              };
          },
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
          .type("resource_item")
          .equalsFilter("elements.slug", route.params.uid)
          .toPromise();
  
        return { pageData: response.data.items[0] };
      } catch (error) {
        console.error("Error fetching data:", error);
        return { pageData: {} };
      }
    },
  
    head() {
      return {
        title: this.pageData.elements.meta_title.value,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.pageData.elements.meta_description.value,
          },
        ],
      };
    },
  
    mounted() {
        this.prefillForm();
      },
      methods: {
      handleSubmit() {
          if (this.fullName) {
            window.location.href = "https://machintel.com/thank-you-two";
            return;
          }
          // Programmatically submit the form
          this.$refs.webform.submit();
          },
      prefillForm() {
          const queryParams = new URL(window.location.href).searchParams;
          if (queryParams.has("utm_source")) {
              this.LEADCF19 = queryParams.get("utm_source");
          }
          if (queryParams.has("utm_medium")) {
              this.LEADCF20 = queryParams.get("utm_medium");
          }
          if (queryParams.has("utm_campaign")) {
              this.LEADCF22 = queryParams.get("utm_campaign");
          }
          this.LEADCF21 = this.pageData.elements.post_title.value;
          },
    },
    computed: {
    thankYouUrl() {
      const baseUrl = 'https://machintel.com'; // Replace with your actual domain
      // Assuming your route params contain 'uid' for the slug
      // Also ensure to remove the leading slash from the route path if present
      const path = this.$route.path.startsWith('/') ? this.$route.path.substring(1) : this.$route.path;
      return `${baseUrl}/${path}thank-you`;
    }
  },
  
  };
  </script>
  <style>
  .resource {
    a {
      @apply text-accent;
    }
    ul {
      list-style-type: disc;
      @apply marker:text-primary;
      li {
        @apply ml-5 mb-3;
  
        strong {
          @apply text-primary;
        }
      }
    }
    #fullname {
          display: none;
      }
    .btn-color {
      color: white !important;
    }
  }
  </style>
  