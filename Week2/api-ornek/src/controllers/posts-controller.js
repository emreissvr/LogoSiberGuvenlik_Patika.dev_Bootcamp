
const posts = require("../data/posts.json") //posts değişkenine posts.json verilerini atadık

getAllPosts = () => {   // tüm posts verilerini getirecek fonksiyonumuz
    return posts
} 

getByPostId = (postId) => { // girilen id değerine göre çalışacak fonksiyon
    return posts.filter(c => c.id ==postId)
}

module.exports = {getAllPosts, getByPostId}  // posts-controller'ı modül olarak export ettik.
// Başka bir uygulama tarafından bu modül require ile dahil edilip bu modülde izin verilen fonksiyonlar kullanılabilir
