"use strict";
const { ref, toRef } = Vue;
const { useStore } = Vuex;
import __main__ from "../../config.js";
import { capitalize } from "../../../../libs/bl/js/helpers/string.js";

const Navigator = {
	name: "Navigator",
	setup() {
		const store = useStore();
		const permiso = toRef(store.state, "permiso");
		const flag = toRef(store.state, "flag");
		const assets = ref(__main__.assets);
		const name = ref(capitalize(__main__.app));

		return { assets, name, flag, permiso };
	},
	/*html*/
	template: `
		<transition name="fade" mode="out-in" appear>
			<header class="nav-bl">
				<nav class="navbar navbar-expand navbar-dark bg-dark px-3">
					<a class="navbar-brand d-flex" href="#">
						<img :src="assets + '/iconoClaro.png'" alt="" width="30" height="30" class="d-inline-block align-top">
						<span class="box-show mx-1">{{ name }}</span>
						<span class="box-hide mx-1"></span>
					</a>
					<div class="table-responsive ms-auto">
						<div class="navbar-nav">
							<router-link to="/home" class="nav-link"><i class="fas fa-home" title="Consultas"></i> Solicitud</router-link>
						</div>
					</div>
				</nav>
			</header>
		</transition>
	`,
};

export default Navigator;
