const articles_table = [
    {
    id: 1,
    title: 'eat fried chicken',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'jouza',
    },
    {
    id: 4,
    title: 'how to studey react',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    author: 'abd',
    },
    {
    id: 7,
    title: 'how to vote',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit',
    author: 'jouza',
    },
    ];
    let last_ID = 7;
    
    const getAllArticles = (req, res) => {
    console.log('getAllArticles CALLED');
    res.json(articles_table);
    };
    
    const createNewArticle = (req, res) => {
    console.log('createNewArticle CALLED');
    
    console.log('REQ.BODY: ', req.body);
    
    req.body.id = ++last_ID;
    
    articles_table.push(req.body);
    res.json(articles_table);
    };
    
    const changeArticleTitleById = (req, res) => {
    console.log('REQ.PARAMS: ',req.params)
    console.log('ID: ',req.params.id)
    for (let i = 0; i < articles_table.length; i++) {
    
    if(articles_table[i].id == req.params.id){
    
    articles_table[i].title=req.params.newTitle
    }
    }
    res.json(articles_table)
    };

    const changeArticleAuthorById = (req, res) => {
        console.log('REQ.PARAMS: ',req.params)
        console.log('AUTHOR: ',req.params.author) 
        for (let i = 3; i < articles_table.length; i++) {
        
        if(articles_table[i].author == req.params.author){
    
        articles_table[i].author=req.params.newAuthor
        }
        }
        res.json(articles_table)
        };


    const deleteArticleById = (req, res) => {
        console.log('REQ.PARAMS: ',req.params)
        console.log('ID: ',req.params.id) 
        for (let i = 0; i < articles_table.length; i++) {
    
        if(articles_table[i],id== req.params.id){
        
        articles_table.shift(req.body);
              }
        }
        res.json(articles_table)
        };

        const deleteArticleByAuthor = (req, res) => {
            console.log('REQ.PARAMS: ',req.params)
            console.log('AUTHOR: ',req.params.author) 
            for (let i = 3; i < articles_table.length; i++) {
    
            if(articles_table[i],author== req.params.author){
            
            articles_table.shift(req.body);
                  }
            }
            res.json(articles_table)
            };

    module.exports = {
    // "getAllArticles":getAllArticles,
    getAllArticles,
    createNewArticle,
    changeArticleTitleById,
    changeArticleAuthorByld,
    deleteArticleById,
    deleteArticleByAuthor,
    };
