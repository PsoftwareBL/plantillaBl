"use strict";

import __main__ from "../../../../config.js";

const hoy = moment().format("YYYY-MM-DDThh:mm:ss");
const end = moment().endOf('month').format("YYYY-MM-DD");
const ago = moment().subtract(1, 'month').format("YYYY-MM-DD"); 

class User {

    constructor(id, name){
        this.docuement = id
        this.name = name
    }

    get_name(){
        let myname = new String(this.name).toLowerCase()
        myname.charAt(0).toUpperCase()

        return myname;
    }
    
};

export default User;