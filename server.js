const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/datos", (req,res)=>{
console.log(req.body.ans);

var respuestas = req.body.ans;

for(var i = 0; i <respuestas.length; i++){
console.log(respuestas[i])
}

res.json(req.body);
});

app.listen(3000,()=>{
    console.log("Listening in port 3000")
})