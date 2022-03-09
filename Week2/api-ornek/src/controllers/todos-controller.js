const todos = require("../data/todos.json") // todos değişkenine todos.json verilerini atadık

getAllTodos = () => { // tüm todos verilerini getirecek fonksiyonumuz
    return todos
}

getTodosByUserId = (userId) => {   // girilen id değerine göre çalışacak fonksiyon örenğin 127.0.0.1:5000/todos/?userId=10 olan todo'yu getirir
    return todos.filter(todo => todo.userId == userId)
}

module.exports = {getAllTodos, getTodosByUserId}  // todos-controller'ı modül olarak export ettik.
// Başka bir uygulama tarafından bu modül require ile dahil edilip bu modülde izin verilen fonksiyonlar kullanılabilir
