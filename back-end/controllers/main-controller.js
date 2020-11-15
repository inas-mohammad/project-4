const connection = require ("../db")



let articles_table = [
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
    const sqlCommand='SELECT * FROM articles'
    connection.query(sqlCommand,(err,result)=>{
        if (err)throw err;
        console.log('RESULT:',result);
        res.json(result)
    });

    const createNewArticle = (req, res) => {
        console.log('createNewArticle CALLED');
        const sqlCommand = ` INSERT INTO articles (title,description,author)Valuse("${req.body.title}","${req.body.description}","${req.body.author}")`;
        connection.query(sqlCommand,(err,result)=>{
        if (err)throw err;
        console.log('RESULT:',result);
        res.json(result)
    });
};
    const changeArticleTitleById = (req, res) => {
    console.log(` changeArticleTitleById CALLED`);

    const sqlCommand = `
    UPDATE articles 
    SET title = "${req.params.newTitle}"
    where id = ${req.params.id}" `

    connection.query(sqlCommand, (err, result) => {
        if (err) throw err;
        console.log('RESULT:', result);
        res.json(result)
    });;

    res.json(articles_table)
};

const changeArticleAuthorById = (req, res) => {
    console.log(` changeArticleAuthorByAuthor CALLED`);
    const sqlCommand = `
    UPDATE articles 
    SET author = "${req.body.newAuthor}"
    where id = ${req.params.id}" `

    connection.query(sqlCommand, (err, result) => {
        if (err) throw err;
        console.log('RESULT:', result);
        res.json(result)
    });;

    res.json(articles_table)
};

const deleteArticleById = (req, res) => {
    console.log(` deleteArticleById CALLED`);
    const sqlCommand = `DELETE  FROM articles WHERE where id = ${req.params.id}" ` ;
    
    
     connection.query(sqlCommand, (err, result) => {
        if (err) throw err;
        console.log('RESULT:', result);
        res.json(result)
    });;

    res.json(articles_table)
};

const deleteArticleByAuthor = (req, res) => {
    console.log(` deleteArticleByAuthor CALLED`);
    const sqlCommand = `DELETE  FROM articles WHERE where author = ${req.params.author}" ` ;
    
    
     connection.query(sqlCommand, (err, result) => {
        if (err) throw err;
        console.log('RESULT:', result);
        res.json(result)
    });;

    res.json(articles_table)
};


const getAllArticles_express = (req, res) => {
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

const changeArticleTitleById_express = (req, res) => {
    console.log('REQ.PARAMS: ', req.params)
    console.log('ID: ', req.params.id)
    for (let i = 0; i < articles_table.length; i++) {

        if (articles_table[i].id == req.params.id) {

            articles_table[i].title = req.params.newTitle
        }
    }
    res.json(articles_table)
};

const changeArticleAuthorById_express = (req, res) => {
    console.log('REQ.PARAMS: ', req.body)
    console.log('AUTHOR: ', req.params.author)
    if (req.body[i]==req.params.id) {
        articles_table.splice(req.body.id.shift()=req.params.id)
    };
    res.json(articles_table)
};


const deleteArticleById_express = (req, res) => {
    console.log('REQ.PARAMS: ', req.params)
    console.log('ID: ', req.params.id)
    
    articles_table=articles_table.filter((elem,i)=>{
        return elem.id != req.params.id
    })
        
    
    res.json(articles_table)
};

const deleteArticleByAuthor_express = (req, res) => {
    console.log('REQ.PARAMS: ', req.params )
    console.log('AUTHOR: ', req.params.author)
    

    articles_table=articles_table.filter((elem,i)=>{
        return elem.author != req.params.author
    }) 

    res.json(articles_table)
};

module.exports = {

    getAllArticles,
    createNewArticle,

    changeArticleTitleById,
    changeArticleAuthorById,
        deleteArticleById,
    deleteArticleByAuthor,
};
