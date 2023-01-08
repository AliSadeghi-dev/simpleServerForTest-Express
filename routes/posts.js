const { Router } = require("express");
const postsControllers = require("../controllers/posts/post");

const postRoutes = Router();

postRoutes.get("/", postsControllers);

module.exports = postRoutes;