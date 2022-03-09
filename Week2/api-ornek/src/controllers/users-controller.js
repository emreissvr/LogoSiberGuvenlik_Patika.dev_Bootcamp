const users = require("../data/users.json") // users değişkenine users.json verilerini atadık

getAllUsers = () => {  // tüm users verilerini getirecek fonksiyonumuz
    return users
}

getByUserId = (userId) => {  // girilen id değerine göre çalışacak fonksiyon örenğin 127.0.0.1:5000/todos/?userId=10 olan user'ı getirir
    return users.filter(user => user.id == userId )
}

module.exports = {getAllUsers, getByUserId} // users-controller'ı modül olarak export ettik.
// Başka bir uygulama tarafından bu modül require ile dahil edilip bu modülde izin verilen fonksiyonlar kullanılabilir