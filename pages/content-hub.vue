<template>
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mb-10">
            <h1 class="text-primary text-3xl lg:text-5xl font-serif mb-7 mt-4">Content Hub</h1>
            <p class="text-xl antialiased font-medium text-font">
                Uncover, Connect, Thrive: Navigating the Partner Ecosystem.
            </p>
        </div>
        <div class="lg:grid lg:grid-cols-8">
            <div class="col-span-2">
                <input type="text" v-model="searchQuery" placeholder="Search..." />
            </div>
            <div class="pt-5 ml-auto mr-3 pb-5 lg:pb-0 lg:pt-2">
                <span class="font-bold mb-3 text-font">Filter By Type</span>
            </div>
            <div class="col-span-2">
                <select v-model="selectedType" @change="filterChange()"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    <option value="All">All</option>
                    <option value="Blog">Blog</option>
                    <option value="Case Study">Case Study</option>
                    <option value="E-Book">E-Book</option>
                    <option value="Infographic">Infographic</option>
                    <option value="Webinar">Webinar</option>
                    <option value="Whitepaper">Whitepaper</option>
                    <!-- Add other options based on your available types -->
                </select>
            </div>

        </div>
        <div class="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a v-for="(post, index) in filteredPosts" :key="index" class="col-span-1 flex flex-col pb-5 mb-5"
                :href="getHref(post)" :data-type="getType(post)">
                <article class="bg-white rounded-lg border border-gray-200 shadow-md h-full">
                    <img :src="post.elements.image.value[0].url" class="w-full object-cover h-40"
                        :alt="post.elements.image.value[0].description" />

                    <div class="p-6">
                        <span
                            class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{{
                    getType(post) }}</span>
                        <p class="text-sm">
                            {{ $dayjs(post.elements.date.value).format("MMM D, YYYY") }}
                        </p>
                        <h2 class="my-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {{ post.elements.post_title.value }}
                        </h2>
                    </div>
                </article>
            </a>
        </div>
        <div class="flex gap-2 justify-end" v-if="showPagination">
            <button class="p-2 bg-white rounded-lg border border-gray-200 shadow-md" @click="backPage">
                prev
            </button>
            <button class="p-2 rounded-lg border border-gray-200 shadow-md"
                :class="{ 'bg-blue-500': selectedId === item }" v-for="item in Math.ceil(this.totalLength / perPage)"
                :key="item" @click="() => goToPage(item)" :id="item">
                {{ item }}
            </button>
            <button class="p-2 bg-white rounded-lg border border-gray-200 shadow-md" @click="nextPage">
                next
            </button>
        </div>

    </div>
</template>

<script>
import { DeliveryClient } from "@kentico/kontent-delivery";
export default {
    data() {
        return {
            selectedType: "All",
            searchQuery: "",
            perPage: 10,
            pageRef: 1,
            totalLength: 0,
            selectedId: 1,
            prevSelectedType: null,
        }
    },
    async asyncData({ params }) {
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
                .type(["blog_post", "resource_item"])
                .collection("default")
                .orderParameter("elements.date[desc]")
                .toPromise();

            return {
                pageData: response.data.items,
            };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { pageData: {} };
        }
    },

    computed: {
        getHref() {
            return (post) => {
                if (post.elements.blog_category) {
                    return `/blog/${post.elements.slug.value}`;
                } else if (post.elements.type.value[0].name === "Case Study") {
                    return `/case-studies/${post.elements.slug.value}`;
                } else if (post.elements.type.value[0].name === "E-Book") {
                    return `/ebook/${post.elements.slug.value}`;
                } else if (post.elements.type.value[0].name === "Infographic") {
                    return `/infographics/${post.elements.slug.value}`;
                } else if (post.elements.type.value[0].name === "Webinar") {
                    return `/webinar/${post.elements.slug.value}`;
                } else if (post.elements.type.value[0].name === "Whitepaper") {
                    return `/whitepaper/${post.elements.slug.value}`;
                }
                // Add a default return if needed
            };
        },
        filteredPosts() {
            let result = this.pageData;

            // Filter by type
            if (this.selectedType !== "All") {
                result = result.filter(
                    (post) => this.getType(post) === this.selectedType
                );
            }

            // Filter by search query
            if (this.searchQuery) {
                result = result.filter((post) =>
                    post.elements.post_title.value
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                );
            }
            this.totalLength = result.length;
            this.showPagination = this.totalLength / this.perPage >= 1;
            result = result.slice(
                (this.pageRef - 1) * this.perPage,
                this.pageRef * this.perPage
            );
            return result;
        },
    },
    methods: {
    filterChange() {
      if (this.selectedType !== this.prevSelectedType) {
        this.selectedId = 1;
        this.pageRef = 1;
        this.prevSelectedType = this.selectedType;
      }
    },
    nextPage() {
      if (this.pageRef !== Math.ceil(this.totalLength / this.perPage)) {
        this.pageRef += 1;
        this.selectedId = this.pageRef;
      }
    },
    backPage() {
      if (this.pageRef !== 1) {
        this.pageRef -= 1;
        this.selectedId = this.pageRef;
      }
    },
    goToPage(numPage) {
      this.pageRef = numPage;
      this.selectedId = this.pageRef;
    },
    getType(post) {
      if (post.elements.blog_category) {
        return "Blog";
      } else if (post.elements.type.value[0].name === "Case Study") {
        return "Case Study";
      } else if (post.elements.type.value[0].name === "E-Book") {
        return "E-Book";
      } else if (post.elements.type.value[0].name === "Infographic") {
        return "Infographic";
      } else if (post.elements.type.value[0].name === "Webinar") {
        return "Webinar";
      } else if (post.elements.type.value[0].name === "Whitepaper") {
        return "Whitepaper";
      }
      // Add a default return if needed
    },
  },

    head() {
        return {
            title: "Partner Intelligence Platform | Partner Explorer",
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Explore the world’s largest network of partner and channel ecosystems to discover new opportunities for growth.",
                },
            ],
        };
    },
};
</script>