import { DeliveryClient } from "@kentico/kontent-delivery";

async function getDynamicRoutes() {
  const projectId = process.env.PROJECT_ID;
  const deliveryClient = new DeliveryClient({
    projectId: projectId, // Replace with your actual Kontent project ID
  });

  // Fetch 'component_page' items
  const pageResult = await deliveryClient
    .items()
    .type("component_page")
    .collection("partnerexplorer")
    .toPromise();

  const pageRoutes = pageResult.data.items.map(
    (item) => `/${item.elements.slug.value}`
  );

  // Combine both arrays of routes
  return [...pageRoutes];
}

module.exports = getDynamicRoutes;
