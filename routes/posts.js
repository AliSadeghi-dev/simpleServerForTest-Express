const { Router } = require("express");
const {
    postsControllers,
    singlePostController,
} = require("../controllers/posts/post");

const postRoutes = Router();

postRoutes.get("/", postsControllers);
postRoutes.get("/:id", singlePostController);

module.exports = postRoutes;