"use strict";
const { createRouter, createMemoryHistory } = VueRouter;
import __main__ from "../../config.js"

const router = new createRouter({
	history: createMemoryHistory(`appbl/${__main__.app}/public/`),
	routes: [
		{
			path: "/",
			name: "Login",
			component: () => import("../views/Login.js"),
			meta: { requireAuth: false },
		},
		{
			path: "/home",
			name: "Home",
			component: () => import("../views/Home.js"),
			meta: { requireAuth: true },
		},
		{
			path: "/:pathMatch(.*)",
			name: "PageNotFound",
			component: () => import("../views/PageNotFound.js"),
			meta: { requireAuth: false },
		},
	],
});

export default router;