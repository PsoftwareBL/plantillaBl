"use strict";
const { toRef, reactive, watchEffect } = Vue;
const { useStore } = Vuex;
const { useRouter } = VueRouter;
import __main__ from "../../config.js"

const Login = {
	name: "Login",
	setup() {
		const store = useStore();
		const router = useRouter();
		const mensaje = toRef(store.state, "mensaje");
		const session = toRef(store.state, "session");
		const flag = toRef(store.state, "flag");
		const usr = toRef(store.state, "user");
		const user = reactive({ usr: "", pas: "" });

		const ingresar = async () => await store.dispatch("login", user);

		if (session.value) {
			let permissions = __main__.permissions;
			for (const i in permissions) {
				if(permissions[i].identification == +usr.value.ced && permissions[i].area == 'admin') {
					flag.value = true;
				}
			}
			router.push({ path: "/home" });
		}

		return { user, mensaje, ingresar };
	},
	/*html*/
	template: `
		<div class="container-login">
			<div class="area"></div>
			<form @submit.prevent="ingresar" class="form-login">
				<div class="img-login"></div>
				<div class="content-login">
					<div>
						<label>Usuario</label>
						<input v-model="user.usr" type="text" placeholder="Ingrese Usuario" autocomplete="off">
					</div>
					<div>
						<label>Contraseña</label>
						<input v-model="user.pas" type="password" placeholder="Ingrese Contraseña" autocomplete="off">
					</div>
					<div>
						<div class="space-login"></div>
						<button class="button-login">Ingresar</button>
						<div class="message-login">{{ mensaje }}</div>
					</div>
				</div>
			</form>
		</div>
	`,
};

export default Login;