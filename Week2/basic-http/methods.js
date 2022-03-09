const getValues = (callback) => {

    var durum = false;
    if(durum){
        callback(undefined,"method ok");
    }
    else{
        callback("veri getirilemedi",undefined)
    }
    
}

getValues(callback); // methodun içine o methodu handle edecek callback'i parametre olarak vereceiz buna callback çağrımı denir

getValues((err,data) => {
    if(err){
        // hata alınması durumunda çalışacak kodlar
        console.log(err);

    }
    else{
        console.log(data);

    }
})


//"node methods" ile console da çalıştır


