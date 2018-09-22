const nextRoutes = require("next-routes");
const routes = (module.exports = nextRoutes());

routes.add('list', "/list", "index/index");
routes.add("add", "/add", "add/index");
// routes.add("message", "/message", "message/index");
routes.add("topic", "/topic", "index/index");
routes.add("login", "/login", "login/index");
// routes.add("about", "/about");


