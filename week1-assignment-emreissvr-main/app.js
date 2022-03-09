// Solution 1 - String 

const xhr = new XMLHttpRequest(); // XMLHttpRequest'den xhr isimli bir tane obje oluşturdum
xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
// open() fonksiyonuyla "GET" request işlemi(methodu) yapacağımı bildirdim. 
//  external REST Api olan JSON placeholder'daki users URL'si ile Bağlantı kurdum.
// "true" diyerek bu işlemi asenkron bir şekilde yaptım. Bildirmesekte olur zaten default olarak "true" geliyor.
xhr.onload = function(){

    if( this.readyState != 4 ) 
    {
        console.log("ReadState: " + this.readyState); // readState durumu ile karşılaşırsam diye console'a yazdırmak istedim.

    }
    else
    {
        // response'umuz serverda hazır olduğunda onload function çalışacak
        if(this.status == 200){  
            // this keyword'ü xhr objesini işaret eder. Yani xhr'ın status objesi 200 ise koşul true olur ve block içindeki işlemler yapılır.
            console.log(this.responseText); // JSON objemizi string şeklinde bize verir
        }
        else
        {
            console.log("Error: " + this.status);
        }
    }
    
}
xhr.send(); // request'i gönderdim





// Solution 2 - JSON 
var xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
xhr.onload = function(){

    
    if (this.readyState != 4) 
    {  
        console.log("ReadState: " + this.readyState); // readState durumu ile karşılaşırsam diye console'a yazdırmak istedim.
    }
    else 
    {
        if(this.status == 200){  
            const response = JSON.parse(this.responseText)
            console.log(response); // text yerine JSON objesini bize verir
        }
        else{
            console.log("Error: " + this.status);
        }
    }
}

xhr.send();
