"use strict";
const { useStore  } = Vuex;
const { toRef, ref, computed, onMounted, watchEffect } = Vue;

const Item = {
	name: "Item",
	setup() {
		const store = useStore();
		const listUsers = toRef(store.state.main, "listUsers");
		let filters = toRef(store.state.main, "filters");
        let get_users = async () => await store.dispatch("main/get_users");
		// const var = toRef(store.state.main, "var");
		// let getvar = computed(() => store.getters["main/getvar"]);
        // let commit = () => store.commit("main/commitfunc");
        // let dispathfunc = async () => await store.dispatch("main/dispathfunc");

		onMounted(() => {
			get_users();
		})

		return { listUsers, filters };
	},
	/*html*/
	template: `
		<div>
			Start your application!
		</div>
		<div>
			<form @submit.prevent="listUsers.search(filters)" class="form-box">
				<div>
					<label class="form-label">Filtro</label>
					<input class="form-control" type="text" v-model="filters.ced" @input="listUsers.search(filters)">
				</div>
				<div>
					<button type="submit" class="btn btn-success"><i class="fas fa-search"></i></button>
				</div>
			</form>
			<div>
				<ul class="list-info">
					<li v-for="user in listUsers.getList()">
						<p>{{ user.docuement }}</p>
						<p>{{ user.get_name() }}</p>
					</li>
				</ul>
			</div>
		</div>
    `
}

export default Item;
