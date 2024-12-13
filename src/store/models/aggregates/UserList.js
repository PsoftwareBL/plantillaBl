"use strict";

import User from "../entities/User.js"; 
const hoy = moment().format("YYYY-MM-DDThh:mm:ss");
const end = moment().endOf('month').format("YYYY-MM-DD");
const ago = moment().subtract(1, 'month').format("YYYY-MM-DD"); 

export const UserListInterface = {
    list: [],
    error: false,
    query: new Object(),
    getList: () => {},
    search: () => {},
}

export class UserList 
{
    _list = new Array();
    error = false;

    constructor(query){
        this.query = query;
    }

    getList(){
        return [...this._list]
    }

    async search(filter){
        let data = {
            id: filter.ced,
			op: 'getUser'
		}

		let response = await this.query.search(data, 'MainView')

        this._list = new Array();
		if(response.message == 'OK'){
			this.error = false;
            for (let k = 0; k < response.payload.length; k++) {
                const element = response.payload[k];
                let usr = new User(element.documento, element.nombre)
                this._list.push(usr)
            }
		} else {
			this.error = true;
		}    
    }
};