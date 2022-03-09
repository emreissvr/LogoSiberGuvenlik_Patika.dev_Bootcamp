const http = require("http"); // bu kendi serverımı oluşturmam için gerekli olan kütüphane(paket)
const kisiler = require("./data.json")

const server = http.createServer((req,res) => { // request ve response'u yakalayabileceğimiz parametreleri belirliyoruz burda 
    console.log(req.url)
    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html"); // server olarak göndereceğim zarfın başlığı ve geriye döndüreceği değer (browsera html göndereceğimizi belirttik )
    // veri haberlşemesi için geriye json döndürmek için  "application/json" bu yazılır 
    // bana request talebi gönderen client'ların benden alacağı response'un türü Content-Type'dır 
    res.write(JSON.stringify(kisiler)); // bu zarfın içeriği -- kisileri json 'a çevirdik.
    res.end(); 
})  // bu http üzerinde yeni bir server yarat bana diyorsun 
// res.write ile client'a döndürmem gereken şeyin mutlaka string olması gerek çünkü biz server tarafıyız 
// normalde biz istemci olarak browserdan birşey istediğimizde o bize serverdan string döner 
// eğer direkt kişileri ginderseydin list of object türünde göndermiş olurdun yani o aslında object tipinde 


const PORT = 5000;

// ŞİMDİ server'ı dinlemye başlayalım 
server.listen(PORT, () => console.log(`server ${PORT} portu üzerinde çalışmaya başladı`));

// browser-client uygulamasından benim yapmış olduğum server'ı URL parametresiyle tetiklemiş olduk 







// npm install -D nodemon -- uygulamanın çalışması için sadece dev-dependencyleri ekle
// package.json 'a -- "start": "nodemon server" de 
// uygulamayı başlatırken npm start de 
// nodemon şu işe yarar -- buradaki kodda her değişiklik yaptığımızda server yeniden başlar

