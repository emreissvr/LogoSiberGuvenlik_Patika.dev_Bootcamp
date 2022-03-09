


const express = require("express")   // express kütüphanesi sayfaya eklendi


const postController = require("./src/controllers/posts-controller.js") // src/controller klasöründeki posts-controller dosyasını buraya ekledik

const userController = require("./src/controllers/users-controller.js") // src/controller klasöründeki users-controller dosyasını buraya ekledik


const todoController = require("./src/controllers/todos-controller.js") // src/controller klasöründeki todos-controller dosyasını buraya ekledik

// uygulama oluşturuldu
const app = express()   

// get ile postları çağırdık
app.get("/posts", (req, res ) => {
    
    // posts-controller ve methodunun çağrılması
    var posts = postController.getAllPosts()
    // response cevabı olarak posts objesini client'a gönder
    res.send(posts)
})

// örneğin posts/5 şeklinde route vererek girilen id'li post'u almak
app.get("/posts/:postId", (req, res) => {
    var post = postController.getByPostId(req.params.postId)
    res.send(post)
})


// get methodu ile user'ları çağırmak
app.get("/users", (req,res) => {
    
    //users-controller ve methodun çağrılması
    var users = userController.getAllUsers()
    //veri döndürme
    res.send(users)

})


// örneğin users/10 şeklinde route vererek girilen id'li user'ı aldık
app.get("/users/:userId", (req, res) => {
    var user = userController.getByUserId(req.params.userId)
    res.send(user)
})

// get methodu ile todos verilerini getirme
app.get("/todos", (req, res ) => {
    var todos
    if(req.query.userId) {
        todos = todoController.getTodosByUserId(req.query.userId)
    }
    else {
        todos = todoController.getAllTodos() 
    }
    res.send(todos)
})

app.listen(6600)   //server ı dinleme