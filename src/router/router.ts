import { createRouter, createWebHistory } from "vue-router";
import test from "../views/test.vue"
import featureaMain from "../views/featuresMain.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            component: test
        },
        {
          path: "/features",
          component: featureaMain
        }
    ],
  });
  
  export default router;