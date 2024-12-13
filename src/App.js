"use strict";
const { toRef } = Vue;
const { useStore } = Vuex;
const { useRouter } = VueRouter;
import Navigator from "./components/Navigator.js";
import Load from "../../../libs/bl/js/models/Load.js";
import __main__ from "../config.js";
import { getCookie } from "../../../libs/bl/js/helpers/cookie.js";
import { routerGuard } from "../../../libs/bl/js/helpers/guard.js";

const App = {
	name: "App",
	components: { 
		Load, Navigator 
	},
	
	setup() {
		routerGuard();
		const store = useStore();
		const router = useRouter();
		const flag = toRef(store.state, "flag");
		const usr = toRef(store.state, "user");
		const load = toRef(store.state, "load");
		const session = toRef(store.state, "session");
		
		const params = window.location.search;
		if (params.indexOf("permiso=CFJKjsJz@yYzy%Z}~8~O") > -1) {
			session.value = true;
			usr.value = {
				ced: getCookie("username"),
				suc: getCookie("sucappbl"),
			};
			
			let permissions = __main__.permissions;
			for (const i in permissions) {
				if(permissions[i].identification == +usr.value.ced && permissions[i].area == 'admin') {
					flag.value = true;
				}
			}
			router.push({ path: "/home" });
		}

		return { 
			load, session 
		};
	},
	/*html*/
	template: `
		<Load v-if="load"></Load>
		<div v-if="!load" class="circuit-back" :class="session ? 'contain-principal' : ''">
			<Navigator v-if="session"></Navigator>
			<router-view />
		</div>
	`,
};

export default App;
