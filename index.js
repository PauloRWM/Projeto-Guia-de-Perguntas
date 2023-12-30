const express = require("express");
const app = express();

//Setando o EJS como engine!
app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get("/:nome/:lang",(req,res)=>{
    var nome = req.params.nome;
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
    {
        nome:"Doritos",
        preco:3.14
    },
    {
        nome:"Banana",
        preco:1.40
    },
    {
        nome:"Carne",
        preco:15.00
    },
    {
        nome:"RedBull",
        preco:6.00
    },
    {
        nome:"Nescall",
        preco:9.00
    }


    ]



    res.render("index",{
    nome:nome,
    lang:lang,
    empresa:"Paulo S.A",
    inscritos:6000,
    msg:exibirMsg,
    produtos:produtos
});

})


app.listen(80,()=>{
    console.log(`Servidor iniciado!`);

});

