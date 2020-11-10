const posts = [
    {
    id: 1,
    title: 'eat fried chicken',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 2,
    title: 'how to studey react',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 3,
    title: 'how to vote',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'amr',
    },
    ];
    

    const getAllPosts=(req,res) => {
        res.json(posts);
    };

    const add= (req,res) =>{ 
        post.push (req.body)
        res.json (posts)
    };
