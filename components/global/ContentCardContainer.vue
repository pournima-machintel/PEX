<template>
    <client-only>
      <div>
        <div
          v-for="codename in data.content_card.linkedItems"
          :key="codename.system.codename"
        >
          <ContentCard :data="codename.elements" />
        </div>
      </div>
    </client-only>
  </template>
  <script>
  export default {
    name: "ContentCardContainer",
    props: {
      data: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  