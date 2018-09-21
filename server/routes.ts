const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add('index', "/", "index/index");
routes.add("about", "/about");


