<template>
    <div
         class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 text-center"
       >
       <h1 class="mb-4 tracking-tight leading-normal hero-line-height font-extrabold text-4xl lg:text-6xl text-primary">Thank you</h1>
       <p> Here is your copy of {{ pageData.elements.post_title.value }}</p>
       <p><a :href="pageData.elements.pdf_asset.value[0].url" target="_blank" class="py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-primary text-white">Download Now</a></p>
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
           .type("resource_item")
           .equalsFilter("elements.slug", route.params.uid)
           .toPromise();
   
         return { pageData: response.data.items[0] };
       } catch (error) {
         console.error("Error fetching data:", error);
         return { pageData: {} };
       }
     },
   }
   </script>