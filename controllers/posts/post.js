const postsControllers = async(req, res) => {
    const posts = [
        { id: 1, title: "post 1", description: "desc 1" },
        { id: 2, title: "post 2", description: "desc 2" },
        { id: 3, title: "post 3", description: "desc 3" },
        { id: 4, title: "post 4", description: "desc 4" },
        { id: 5, title: "post 5", description: "desc 5" },
        { id: 6, title: "post 6", description: "desc 6" },
        { id: 7, title: "post 7", description: "desc 7" },
        { id: 8, title: "post 8", description: "desc 8" },
        { id: 9, title: "post 9", description: "desc 9" },
    ];

    res.json(posts);
};

module.exports = postsControllers;