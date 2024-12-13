"use strict";
const { useStore  } = Vuex;
const { toRef, ref, computed, onMounted, watchEffect } = Vue;
import Item from '../components/Item.js';
import Load from "../../../../libs/bl/js/models/Load.js";

const Home = {
	name: "Home",
	components: { Load, Item },
	setup() {
		const store = useStore();
		// const var = toRef(store.state.Main, "var");
		// let getvar = computed(() => store.getters["Main/getvar"]);
        // let commit = () => store.commit("Main/commitfunc");
        // let dispathfunc = async () => await store.dispatch("Main/dispathfunc");
		
		return { };
	},
	/*html*/
	template: `
		<div class="mycontainer title-center">
            <a href="https://www.aplicativosbl.com/appbl/login/menu.php" target="_blank">
                <img src="./src/assets/empresa.png" class="logo" alt="BL logo" />
            </a>
			<Item></Item>
        </div>
	`,
};

export default Home;
