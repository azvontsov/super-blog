import { createRouter, createMemoryHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostPage from "@/pages/PostPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;
