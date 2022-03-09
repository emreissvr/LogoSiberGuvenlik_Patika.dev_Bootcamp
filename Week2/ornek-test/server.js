// "copy nul server.js" -- server.js dosyası açar


const http = require("http"); // bu kendi serverımı oluşturmam için gerekli olan kütüphane(paket)
const users = require("./data/users");
const posts = require("./data/posts");



const server = http.createServer((req,res) => { // request ve response'u yakalayabileceğimiz parametreleri belirliyoruz burda 
    
    console.log(`Talep geldi : ${req.url}`);
    if (req.url === "/users") {
        // users geriye dönülecek
        
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(users));
        res.end();
    }
    else if(req.url === "/posts"){
        // posts geriye dönülecek
        
        res.setHeader("Content-Type","application/json");
        res.write(JSON.stringify(users));  // biz string olarak gönderiyoruz fakat postman json olarak render ediyor
        res.end();
    }
    else{
        // 404 dönülecek
        res.writeHead(404,"Content-Type","application/json");
        res.end(JSON.stringify({message: "Yönlendirme hatalı"}));
    }
   
})  // bu http üzerinde yeni bir server yarat bana diyorsun 
// res.write ile client'a döndürmem gereken şeyin mutlaka string olması gerek çünkü biz server tarafıyız 
// normalde biz istemci olarak browserdan birşey istediğimizde o bize serverdan string döner 
// eğer direkt kişileri ginderseydin list of object türünde göndermiş olurdun yani o aslında object tipinde 


const PORT = 5000;

// ŞİMDİ server'ı dinlemye başlayalım 
server.listen(PORT, () => console.log(`server ${PORT} portu üzerinde çalışmaya başladı`));











// gelen postları ayırmamız gerek users mı geldi posts mu geldi?