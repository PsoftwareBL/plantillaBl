"use strict";

const app = "pantilla_poo";
const baseUrl = "http://localhost/";
const __main__ = {
	app: app,
	baseUrl : baseUrl,
	assets  : `${baseUrl}testbl/libs/bl/img`,
	api           : `${baseUrl}testbl/PLANTILLAS/${app}/api`,
	url_evidences : `${baseUrl}testbl/PLANTILLAS/${app}/docs/`,
	url_pqrs      : `${baseUrl}testbl/PLANTILLAS/${app}/docs/consults/`,
	permissions   : [
		{ name: 'Juan Jose Oquendo',  identification: 1087984698, area: 'admin' },
		{ name: 'Pedro Nel Osorio' ,  identification: 18507019,   area: 'admin' },
	]
}

export default __main__;