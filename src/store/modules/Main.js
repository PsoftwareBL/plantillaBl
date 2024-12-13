"use strict";

import __main__ from "../../../config.js";
import Query from "../../../../../libs/bl/js/models/Query.js"
import { UserList, UserListInterface  } from "../models/aggregates/UserList.js";

const hoy = moment().format("YYYY-MM-DDThh:mm:ss");
const end = moment().endOf('month').format("YYYY-MM-DD");
const ago = moment().subtract(1, 'month').format("YYYY-MM-DD"); 

//Controller por application
const main = {
	namespaced: true,
	state: () => ({
		//data vars
		listUsers: UserListInterface,
		//Info vars
		filters: {
			ced: '',
		},
		//validation vars
		load: false,
	}),
	mutations: {
		//set data
		set_list(state, item){
			state.listUsers = item;
		},
		//set info
		//set validation
		setAlert(state, data) {
			state.alert = {
				state: true,
				message: data[0],
				class: data[1]
			};
			setTimeout(() => {
				state.alert = {
					state: false,
					message: "",
					class: ""
				};
			}, 5000);
		},
		setNotify(state, data) {
			state.notification = {
				state: true,
				message: data[0],
				color: data[1]
			};
			setTimeout(() => {
				state.notification = {
					state: false,
					message: "",
					color: ""
				};
			}, 5000);
		},
		set_load(state, data){
			state.load = data
		}
	},
	actions: {
		//Search
		async get_users({state, RootState, commit, dispatch}){
			let query = new Query(__main__.api);
			let list = new UserList(query);
			list.search(state.filters.ced);
			await commit('set_list', list)
			if(list.error){
				commit('setAlert', ['No se ha obtenido los datos', 'alert-danger'])
			} else {
				commit('setNotify', ['Proceso realizado correctamente', 'success'])
			}	
		}
		//Insert
		//Update
		//Delete
	},
	getters: {},
};

export default main;
