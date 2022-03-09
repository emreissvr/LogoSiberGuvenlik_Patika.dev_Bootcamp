// bir API - RESTFUL - WEB app geliştirme altyapısıdır
// npm install express --save 
// npm install express -- biz bunu kullancaz bu sadece bu projeye eklenir 
// devdependencies -- geliştirme yapılması için gerekli 
// dependencies -- çalışması için gerekli bağlılıklar

const express = require("express");
const users = require("./data/users");
const posts = require("./data/posts");
const app = express();

app.get("/users",(req,res) => {
    if (req.query.id) // query string'te "id" adında bir parametre var ise 
    {
        var item = users.filter(x => x.id == req.query.id); // O id'ye ait olan verileri filtrele
        res.send(item);  // postman'de  "/users/?id=2" endpoint ile id'si 2 olan kullanıcıyı getirir
    }
    else
    {
        res.send(users); // O id'ye ait olan veri yoksa hepsini getir 
    }
});


// post çağrıları için 
app.post("/posts/:postId",(req,res) => 
{  
    // örneğin "127.0.0.1.5000/posts/3"  bu route tanımlamasında 3 numaralı postun gelmesini istiyoruz.
    
    result = posts.filter(x => x.id == req.params.postId);
    res.send(result);

})


app.post("/posts",(req,res) => 
{  
    res.send(posts);
})

const PORT = 5000;
app.listen(PORT);




// api oluştururken 
//  hangi method çağırımı yapılacak -- POST,GET,DELETE,PUT
//  hangi end point
// hangi parametrik endpoint / endPointName / param
// middlewarelar olucak -- logging, authentication 




