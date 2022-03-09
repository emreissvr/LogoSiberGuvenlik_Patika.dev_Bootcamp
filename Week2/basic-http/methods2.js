const getValue = () => {
    return new Promise((resolve,reject) => { 
        // new instance of promise -- promise yapısında olan bir method geriye mutlaka bir promise döndürür yani promise classından yeni bir instance türetir 
        // bu instance'ı iki farklı parametresiyle(resolve,reject) içeride handle eder. resolve'u then ile reject'i catch ile yakalanr
        var durum = true; // false verirsek reject tetiklenir 
        if(durum){
            resolve("veriler getirildi"); // eğer işlem düzgün bir şekilde gerçekleşiyorsa resolve gerçekleşmiyorsa reject çalışır
        }
        else{
            reject("Verilerde hata var");
        }

    })
}


getValue().then(result => { // resolve olması durumunda resolve içindeki string değeri result'a yüklenir rejectte ise err'ye yüklenir
    console.log(result); // then çalışması durumunda catch çalışmaması durumunda 
}).catch(err => {
    console.log(err);
}).finally(fin => { // finally her halükarda çalışır 
    console.log("Her türlü çalışırım");
})


// biz asenkron birşey kodlayacağımız zaman geriye promise objesi döndürüyor














