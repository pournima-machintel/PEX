<template>
    <div
      class="border-colors-grey-100 border-2 shadow-md bg-colors-grey p-3 mt-3 mb-10 w-fit"
    >
      <iframe
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + youtube_id"
      ></iframe>
    </div>
  </template>
  <script setup>
  import { defineProps } from "vue";
  
  const props = defineProps(["youtube_id"]);
  </script>
  