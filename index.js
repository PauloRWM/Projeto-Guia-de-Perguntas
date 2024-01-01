const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Perguntas');
//database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada com sucesso!")
    }
    )
    .catch((msg) =>{
    console.log(`Ocorreu um erro: ${msg}`)
    })



//Likando lib body-parser
app.use(bodyParser.urlencoded({extended:false}));


app.use(bodyParser.json());


//Setando o EJS como engine!
app.set('view engine', 'ejs');
app.use(express.static('public'))


//home 
app.get("/",(req,res)=>{
   

    res.render("index",{
    
});

})
//Exibe formulario de perguntas
app.get("/perguntar",(req,res) => {


    res.render("perguntar",{

    })

})


//salva perguntas enviadas no banco de dados
app.post("/salvarPerguntas",(req, res)=>{
    console.log(res.data)
    Pergunta.create({
        "titulo":req.body.titulo,
        "descricao":req.body.descricao
    }).then(()=>{
        res.redirect("/");

    }).catch ((erro)=>{
        console.log(`Encontramos um erro:${error}`)
    })


});


app.listen(80,()=>{
    console.log(`Servidor iniciado!`);

});

