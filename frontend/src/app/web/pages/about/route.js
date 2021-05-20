import AboutUs from "./index";
import routeURL from "config/routeURL";

export default {
	routes: [
		{
			auth: false,
			path: routeURL.web.aboutUs(),
			component: AboutUs,
		},
		
	],
};
