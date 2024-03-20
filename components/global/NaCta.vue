<template>
 <div v-if="data.button_link.value"
    :class="
      data &&
      data.button_alignment &&
      data.button_alignment.value &&
      data.button_alignment.value[0] &&
      data.button_alignment.value[0].codename === 'centre' &&
      'text-center'
    "
  >
    <a
      v-if="data.color.value[0].codename == 'txt_blue'"
      :href="data.button_link.value"
      class="inline-flex items-center text-sm font-medium text-primary min-w-max"
    >
      {{ data.button_text.value }}
      <svg
        class="ml-2 w-5 h-5 mt-[2px]"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_blue'"
      class="text-center border-0 btn shadow-md bg-primary px-6 py-3 inline-flex items-center btn-blue text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
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

    <a
      v-if="data.color.value[0].codename == 'bg_cyan'"
      class="text-center rounded-md border-2 border-cyan btn shadow-md bg-cyan px-6 py-3 inline-flex items-center btn text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'txt_cyan'"
      class="text-center rounded-md border-2 border-cyan btn shadow-md px-6 py-3 inline-flex items-center btn text-cyan text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_dark_yellow'"
      class="text-center rounded-md border-2 border-dark-yellow btn shadow-md bg-dark-yellow px-6 py-3 inline-flex items-center btn text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'txt_dark_yellow'"
      class="text-center rounded-md border-2 border-dark-yellow btn shadow-md px-6 py-3 inline-flex items-center btn text-dark-yellow text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_accent_2'"
      class="text-center inline-flex items-center btn-blue text-white text-sm font-bold border-0 btn-accent-2 shadow-md bg-accent-2 px-6 py-3 min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
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

    <a
      v-if="data.color.value[0].codename == 'bg_white'"
      class="text-center border-0 btn shadow-md bg-white px-6 py-3 inline-flex items-center btn-blue text-primary-3 text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_blue_no_arrow'"
      class="text-center border-0 btn shadow-md bg-primary px-6 py-3 inline-flex items-center btn-blue text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>
  </div>
  <div v-else
  :class="
      data &&
      data.button_alignment &&
      data.button_alignment.value &&
      data.button_alignment.value[0] &&
      data.button_alignment.value[0].codename === 'centre' &&
      'text-center'
    "
  >
    <a
      v-if="data.color.value[0].codename == 'txt_blue'"
      :href="data.button_link.value"
      class="inline-flex items-center text-sm font-medium text-primary min-w-max"
    >
      {{ data.button_text.value }}
      <svg
        class="ml-2 w-5 h-5 mt-[2px]"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_blue'"
      class="text-center border-0 btn shadow-md bg-primary px-6 py-3 inline-flex items-center btn-blue text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
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

    <a
      v-if="data.color.value[0].codename == 'bg_cyan'"
      class="text-center rounded-md border-2 border-cyan btn shadow-md bg-cyan px-6 py-3 inline-flex items-center btn text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'txt_cyan'"
      class="text-center rounded-md border-2 border-cyan btn shadow-md px-6 py-3 inline-flex items-center btn text-cyan text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_dark_yellow'"
      class="text-center rounded-md border-2 border-dark-yellow btn shadow-md bg-dark-yellow px-6 py-3 inline-flex items-center btn text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'txt_dark_yellow'"
      class="text-center rounded-md border-2 border-dark-yellow btn shadow-md px-6 py-3 inline-flex items-center btn text-dark-yellow text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_accent_2'"
      class="text-center inline-flex items-center btn-blue text-white text-sm font-bold border-0 btn-accent-2 shadow-md bg-accent-2 px-6 py-3 min-w-max"
      v-scroll-to="'#element'"
      >{{ data.button_text.value }}
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

    <a
      v-if="data.color.value[0].codename == 'bg_white'"
      class="text-center border-0 btn shadow-md bg-white px-6 py-3 inline-flex items-center btn-blue text-primary-3 text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

    <a
      v-if="data.color.value[0].codename == 'bg_blue_no_arrow'"
      class="text-center border-0 btn shadow-md bg-primary px-6 py-3 inline-flex items-center btn-blue text-white text-sm font-bold min-w-max"
      :href="data.button_link.value"
      >{{ data.button_text.value }}
    </a>

  </div>
</template>

<script>
export default {
  name: "NaCta",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
