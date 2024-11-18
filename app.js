import express from 'express'

const app = express()
const port = process.env.PORT || 3001

app.get("/", (req, res)=>{
    res.send("Hellooo")   //Nagłówki to meta dane pobiera wartości czy to jest typ json, java, html itp..
})

app.get("/user/:id", (req, res)=>{
    const id = req.params.id
    res.send(`Użytkownik o id: ${id}`)
})

app.get("/user/:userid/order/orderid", (req, res)=>{
    const {userId, orderId} = req.params
    res.send(`Użytkownik od id ${userId} i zamówienie o id${orderId}`)
})
app.get("/post/:postId/comment/:commentId?", (req, res)=>{
    const {postId, commentId} = req.params
    if(commentId){
        res.send(`Komentarz id: ${commentId} dla Posta Id: ${postId}`)
    } else {
        res.send(`Wszystkie komentarze dla posta id: ${postId}`)
    }
})

app.get("/search", (req, res)=>{
    const {term, limit} = req.query

    res.send(`Wszukiwanie terminu: ${term} z limitem wyników ${limit}`)
})

app.get("/uzytkownik/:id/zamowienia", (req, res) =>{
    console.log("params: ")
    console.log(req.params)
    console.log("query: ")
    console.log(req.query)

    const {id} = req.params

    const {status} = req.query

    res.send(`Zamówienie użytkownika ${id} z filtrów ${status || "w trakcie"}`)
})







app.listen(port,()=>{
    console.log("Listening on port" + port)
})




/*app.get("user/", (req, res)=>{
    res.send({name: "John Doe", age: 8})
})

app.get("haion:/", (req, res)=>{
    res.send("<h1>Cześć</h1> <p>this is nothing</p>")
})*/


