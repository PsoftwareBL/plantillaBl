"use strict";
const { Store } = Vuex;
import { getCookie } from "../../../../libs/bl/js/helpers/cookie.js";
import __main__ from "../../config.js"
import main from "./modules/Main.js";

const hoy = moment().format("YYYY-MM-DD");

const store = new Store({
	state: () => ({
		app: __main__.app,
		session: false,
		user: {},
		load: false,
		mensaje: "",
		campos: false,
		contract: true,
		suc: "",
		range: { dsd: hoy, hst: hoy },
		dias: 0,
		flag: {
			admin: false,
			bod: false,
			tran: false,
			lid: false,
			inf: false,
			camb: false,
			ges: false,
			serv: false,
		},
	}),
	mutations: {
		setSession(state, data) {
			state.session = data.est == "OK";
			state.user = {
				ced: data.ced,
				suc: data.mat,
			};
		},
		setMessage(state, { user, est }) {
			state.mensaje = "";
			state.campos = false;
			state.campos = user.usr == "" || user.pass == "";

			if (!state.campos) {
				if (est == "PERMISOS" || est == "NO") {
					state.mensaje = "* Usuario y/o contraseña incorrectas";
				} else if (est == "NOE") {
					state.mensaje = "* Usuario no autorizado";
				} else if (est == "DES") {
					state.mensaje = "* Usuario desactivado";
				}
			} else {
				state.mensaje = "* Faltan campos por llenar";
			}
			if (state.user.suc == "") {
				state.mensaje = "* El equipo no está matriculado";
			}
		},
		setLoad(state) {
			state.load = !state.load;
		},
	},
	actions: {
		async login({ commit, state }, user) {
			commit("setLoad");

			const data = {
				app: state.app,
				mat: getCookie("sucappbl"),
				...user,
			};
			
			let req = await fetch(`${__main__.baseUrl}appbl/libs/bl/php/login.php`, {
				method: "POST",
				mode: "cors",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});
			req = await req.json();

			commit("setSession", req);
			commit("setMessage", { user, est: req.est });
			commit("setLoad");
		},
	},
	modules: { main },
});

export default store;
